<?php
// ==========================================================================
// CONTACT FORM HANDLER - contact.php WITH DEBUG
// Secure contact form processor with detailed logging for debugging
// ==========================================================================

/**
 * Enhanced debug logging function
 * Logs to both error log and a separate debug file
 */
function debug_log($message, $data = null) {
    $timestamp = date('Y-m-d H:i:s');
    $log_message = "[$timestamp] $message";
    
    if ($data !== null) {
        if (is_array($data) || is_object($data)) {
            $log_message .= " | Data: " . json_encode($data, JSON_PRETTY_PRINT);
        } else {
            $log_message .= " | Data: " . $data;
        }
    }
    
    // Log to custom debug file (easier to read)
    error_log($log_message . "\n", 3, 'contact_debug.log');
    
    // Also log to PHP error log
    error_log("CONTACT FORM DEBUG: $log_message");
}

// START DEBUG LOGGING
debug_log("=== NEW CONTACT FORM REQUEST ===");
debug_log("Request Method", $_SERVER['REQUEST_METHOD']);
debug_log("Request URI", $_SERVER['REQUEST_URI'] ?? 'Unknown');
debug_log("User Agent", $_SERVER['HTTP_USER_AGENT'] ?? 'Unknown');
debug_log("Referer", $_SERVER['HTTP_REFERER'] ?? 'No referer');
debug_log("Remote IP", $_SERVER['REMOTE_ADDR'] ?? 'Unknown');

// Email configuration - Update these values for your specific setup
define('MAIL_TO', 'your-email@itagency.com');           // Recipient email address
define('MAIL_FROM', 'noreply@itagency.com');            // Sender email address
define('MAIL_SUBJECT_PREFIX', '[ITAgency Contact] ');    // Email subject prefix
define('SMTP_HOST', 'smtp.gmail.com');                  // SMTP server hostname
define('SMTP_PORT', 587);                               // SMTP port (587 for TLS, 465 for SSL)
define('SMTP_USERNAME', 'your-smtp-username@gmail.com'); // SMTP username
define('SMTP_PASSWORD', 'your-app-password');           // SMTP password or app password
define('SMTP_SECURE', 'tls');                          // Encryption type: 'tls' or 'ssl'

debug_log("Email configuration loaded", [
    'MAIL_TO' => MAIL_TO,
    'MAIL_FROM' => MAIL_FROM,
    'SMTP_HOST' => SMTP_HOST,
    'SMTP_PORT' => SMTP_PORT
]);

// Security headers to protect against common web vulnerabilities
header('Content-Type: application/json');              // Ensure JSON response
header('X-Content-Type-Options: nosniff');            // Prevent MIME type sniffing
header('X-Frame-Options: DENY');                      // Prevent clickjacking
header('X-XSS-Protection: 1; mode=block');            // Enable XSS protection

debug_log("Security headers set");

// Only allow POST requests for form submission
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    debug_log("ERROR: Invalid request method - " . $_SERVER['REQUEST_METHOD']);
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

debug_log("✅ POST method confirmed");

// Log all received data for debugging
debug_log("Raw POST data received", $_POST);
debug_log("Raw FILES data received", $_FILES);

// Referer validation for additional security (optional but recommended)
$allowed_domains = ['localhost', 'yourdomain.com', 'www.yourdomain.com', '127.0.0.1'];
$referer = $_SERVER['HTTP_REFERER'] ?? '';
$referer_host = parse_url($referer, PHP_URL_HOST);

debug_log("Referer validation", [
    'referer' => $referer,
    'referer_host' => $referer_host,
    'allowed_domains' => $allowed_domains
]);

// Block requests from unauthorized domains
if (!in_array($referer_host, $allowed_domains)) {
    debug_log("❌ Access denied - unauthorized domain: " . $referer_host);
    http_response_code(403);
    echo json_encode(['success' => false, 'message' => 'Access denied']);
    exit;
}

debug_log("✅ Referer validation passed");

/**
 * Sanitize user input to prevent XSS and other injection attacks
 * @param string $data Raw input data
 * @return string Sanitized data
 */
function sanitize_input($data) {
    $original = $data;
    $data = trim($data);                    // Remove whitespace
    $data = stripslashes($data);            // Remove backslashes
    $data = htmlspecialchars($data);        // Convert special characters to HTML entities
    
    if ($original !== $data) {
        debug_log("Data sanitized", [
            'original' => substr($original, 0, 50) . '...',
            'sanitized' => substr($data, 0, 50) . '...'
        ]);
    }
    
    return $data;
}

/**
 * Validate email address format
 * @param string $email Email address to validate
 * @return bool True if valid, false otherwise
 */
function validate_email($email) {
    $result = filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
    debug_log("Email validation", [
        'email' => $email,
        'valid' => $result ? 'YES' : 'NO'
    ]);
    return $result;
}

/**
 * Validate phone number format (optional field)
 * @param string $phone Phone number to validate
 * @return bool True if valid or empty, false if invalid format
 */
function validate_phone($phone) {
    if (empty($phone)) {
        debug_log("Phone validation: empty (valid)");
        return true; // Phone is optional
    }
    
    $result = preg_match('/^[\+]?[1-9][\d]{0,15}$/', $phone);
    debug_log("Phone validation", [
        'phone' => $phone,
        'valid' => $result ? 'YES' : 'NO'
    ]);
    return $result;
}

// Collect and sanitize form data
debug_log("🧹 Starting data sanitization...");

$name = sanitize_input($_POST['name'] ?? '');
$email = sanitize_input($_POST['email'] ?? '');
$phone = sanitize_input($_POST['phone'] ?? '');
$company = sanitize_input($_POST['company'] ?? '');
$service = sanitize_input($_POST['service'] ?? '');
$budget = sanitize_input($_POST['budget'] ?? '');
$message = sanitize_input($_POST['message'] ?? '');
$newsletter = isset($_POST['newsletter']) ? 'Yes' : 'No';
$privacy = isset($_POST['privacy']);

debug_log("📋 Sanitized form data", [
    'name' => $name,
    'email' => $email,
    'phone' => $phone,
    'company' => $company,
    'service' => $service,
    'budget' => $budget,
    'message_length' => strlen($message),
    'message_preview' => substr($message, 0, 100) . '...',
    'newsletter' => $newsletter,
    'privacy_accepted' => $privacy ? 'YES' : 'NO'
]);

// Server-side validation array
$errors = [];
debug_log("🔍 Starting validation...");

// Validate required fields
if (empty($name)) {
    $errors['name'] = 'Name is required';
    debug_log("❌ Validation error: Name is empty");
}

if (empty($email)) {
    $errors['email'] = 'Email is required';
    debug_log("❌ Validation error: Email is empty");
} elseif (!validate_email($email)) {
    $errors['email'] = 'Invalid email format';
    debug_log("❌ Validation error: Invalid email format");
}

if (!validate_phone($phone)) {
    $errors['phone'] = 'Invalid phone number format';
    debug_log("❌ Validation error: Invalid phone format");
}

if (empty($message)) {
    $errors['message'] = 'Message is required';
    debug_log("❌ Validation error: Message is empty");
} elseif (strlen($message) < 10) {
    $errors['message'] = 'Message must be at least 10 characters';
    debug_log("❌ Validation error: Message too short (" . strlen($message) . " chars)");
}

if (!$privacy) {
    $errors['privacy'] = 'You must accept the privacy policy';
    debug_log("❌ Validation error: Privacy policy not accepted");
}

// Simple honeypot spam protection
$honeypot = $_POST['website'] ?? ''; // Hidden field that bots typically fill
if (!empty($honeypot)) {
    debug_log("🚨 SPAM DETECTED: Honeypot field filled", ['honeypot_value' => $honeypot]);
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Spam detected']);
    exit;
}

debug_log("✅ Spam check passed (honeypot empty)");

// Return validation errors if any exist
if (!empty($errors)) {
    debug_log("❌ Validation failed", ['errors' => $errors]);
    http_response_code(400);
    echo json_encode(['success' => false, 'errors' => $errors]);
    exit;
}

debug_log("✅ All validations passed!");

// Map service codes to human-readable names for email display
$service_map = [
    'web-development' => 'Web Development',
    'mobile-app' => 'Mobile App Development',
    'cloud-solutions' => 'Cloud Solutions',
    'digital-marketing' => 'Digital Marketing',
    'ui-ux-design' => 'UI/UX Design',
    'data-analytics' => 'Data Analytics',
    'other' => 'Other'
];

// Map budget codes to human-readable ranges for email display
$budget_map = [
    'under-5k' => 'Under $5,000',
    '5k-15k' => '$5,000 - $15,000',
    '15k-50k' => '$15,000 - $50,000',
    '50k-100k' => '$50,000 - $100,000',
    'over-100k' => 'Over $100,000'
];

// Get display names for service and budget
$service_display = $service_map[$service] ?? 'Not specified';
$budget_display = $budget_map[$budget] ?? 'Not specified';

debug_log("📝 Preparing email content", [
    'service_display' => $service_display,
    'budget_display' => $budget_display
]);

// Create email subject line
$email_subject = MAIL_SUBJECT_PREFIX . "New Contact Form Submission from $name";

// Create professional HTML email template for admin notification
$email_body = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1e88e5; color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 30px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { margin-top: 5px; }
        .footer { background: #333; color: white; padding: 15px; text-align: center; font-size: 12px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>New Contact Form Submission</h1>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='label'>Name:</div>
                <div class='value'>$name</div>
            </div>
            <div class='field'>
                <div class='label'>Email:</div>
                <div class='value'>$email</div>
            </div>
            <div class='field'>
                <div class='label'>Phone:</div>
                <div class='value'>" . ($phone ?: 'Not provided') . "</div>
            </div>
            <div class='field'>
                <div class='label'>Company:</div>
                <div class='value'>" . ($company ?: 'Not provided') . "</div>
            </div>
            <div class='field'>
                <div class='label'>Service Interested In:</div>
                <div class='value'>$service_display</div>
            </div>
            <div class='field'>
                <div class='label'>Budget Range:</div>
                <div class='value'>$budget_display</div>
            </div>
            <div class='field'>
                <div class='label'>Newsletter Subscription:</div>
                <div class='value'>$newsletter</div>
            </div>
            <div class='field'>
                <div class='label'>Message:</div>
                <div class='value'>" . nl2br($message) . "</div>
            </div>
        </div>
        <div class='footer'>
            <p>This email was sent from the ITAgency contact form at " . date('Y-m-d H:i:s') . "</p>
        </div>
    </div>
</body>
</html>
";

debug_log("📧 Email content prepared", [
    'subject' => $email_subject,
    'body_length' => strlen($email_body)
]);

// Email sending with PHPMailer (recommended approach)
if (class_exists('PHPMailer\PHPMailer\PHPMailer')) {
    debug_log("📬 PHPMailer class found, attempting to send via SMTP...");
    
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    $mail = new PHPMailer(true);

    try {
        // SMTP server configuration
        $mail->isSMTP();                            // Enable SMTP
        $mail->Host = SMTP_HOST;                    // Set SMTP server
        $mail->SMTPAuth = true;                     // Enable SMTP authentication
        $mail->Username = SMTP_USERNAME;            // SMTP username
        $mail->Password = SMTP_PASSWORD;            // SMTP password
        $mail->SMTPSecure = SMTP_SECURE;            // Enable encryption
        $mail->Port = SMTP_PORT;                    // TCP port to connect to
        $mail->CharSet = 'UTF-8';                   // Set character encoding

        debug_log("📡 SMTP configuration set", [
            'host' => SMTP_HOST,
            'port' => SMTP_PORT,
            'secure' => SMTP_SECURE,
            'username' => SMTP_USERNAME
        ]);

        // Email recipients and sender information
        $mail->setFrom(MAIL_FROM, 'ITAgency Contact Form');    // Sender
        $mail->addAddress(MAIL_TO);                            // Main recipient
        $mail->addReplyTo($email, $name);                      // Reply-to address

        debug_log("📮 Email addresses configured", [
            'from' => MAIL_FROM,
            'to' => MAIL_TO,
            'reply_to' => $email
        ]);

        // Email content configuration
        $mail->isHTML(true);                        // Set email format to HTML
        $mail->Subject = $email_subject;            // Email subject
        $mail->Body = $email_body;                  // HTML body

        // Plain text alternative for non-HTML email clients
        $mail->AltBody = strip_tags(str_replace('<br>', "\n", $email_body));

        debug_log("📝 Attempting to send admin notification email...");

        // Send the main notification email
        $mail->send();
        
        debug_log("✅ Admin notification email sent successfully!");
        
        // Create confirmation email for the user
        $confirmation_subject = 'Thank you for contacting ITAgency';
        $confirmation_body = "
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset='UTF-8'>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #1e88e5; color: white; padding: 20px; text-align: center; }
                .content { background: #f9f9f9; padding: 30px; }
                .footer { background: #333; color: white; padding: 15px; text-align: center; font-size: 12px; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h1>Thank You for Contacting Us!</h1>
                </div>
                <div class='content'>
                    <p>Dear $name,</p>
                    <p>Thank you for reaching out to ITAgency. We have received your message and will get back to you within 24 hours.</p>
                    <p>Here's a summary of your submission:</p>
                    <ul>
                        <li><strong>Service:</strong> $service_display</li>
                        <li><strong>Budget:</strong> $budget_display</li>
                        <li><strong>Message:</strong> " . substr($message, 0, 100) . "...</li>
                    </ul>
                    <p>In the meantime, feel free to explore our portfolio and learn more about our services.</p>
                    <p>Best regards,<br>The ITAgency Team</p>
                </div>
                <div class='footer'>
                    <p>ITAgency - Technology Solutions Excellence</p>
                </div>
            </div>
        </body>
        </html>
        ";

        debug_log("📝 Attempting to send user confirmation email...");

        // Send confirmation email to the user
        $mail->clearAllRecipients();                // Clear previous recipients
        $mail->addAddress($email, $name);           // Add user's email
        $mail->Subject = $confirmation_subject;     // Set confirmation subject
        $mail->Body = $confirmation_body;           // Set confirmation body
        $mail->send();                              // Send confirmation

        debug_log("✅ User confirmation email sent successfully!");

        // Return success response
        $response = [
            'success' => true, 
            'message' => "Thank you $name! Your message has been sent successfully.",
            'debug' => [
                'timestamp' => date('Y-m-d H:i:s'),
                'method' => 'PHPMailer_SMTP',
                'emails_sent' => 2
            ]
        ];
        
        debug_log("🎉 SUCCESS: Both emails sent successfully", $response);
        echo json_encode($response);

    } catch (Exception $e) {
        // Log detailed error for debugging (not shown to user)
        debug_log("💥 PHPMailer Error occurred", [
            'error_message' => $mail->ErrorInfo,
            'exception' => $e->getMessage()
        ]);
        
        error_log("Mail Error: {$mail->ErrorInfo}");
        http_response_code(500);
        echo json_encode([
            'success' => false, 
            'message' => 'Failed to send message',
            'debug' => [
                'timestamp' => date('Y-m-d H:i:s'),
                'error' => 'PHPMailer exception occurred'
            ]
        ]);
    }

} else {
    debug_log("⚠️ PHPMailer not available, falling back to native mail()");
    
    // Fallback to native PHP mail() function (less reliable than PHPMailer)
    $headers = [
        'MIME-Version: 1.0',
        'Content-type: text/html; charset=UTF-8',
        'From: ' . MAIL_FROM,
        'Reply-To: ' . $email,
        'X-Mailer: PHP/' . phpversion()
    ];

    debug_log("📧 Attempting to send via native mail() function");

    // Attempt to send email using native mail() function
    if (mail(MAIL_TO, $email_subject, $email_body, implode("\r\n", $headers))) {
        debug_log("✅ Email sent successfully via native mail()");
        echo json_encode([
            'success' => true, 
            'message' => "Thank you $name! Your message has been sent successfully.",
            'debug' => [
                'timestamp' => date('Y-m-d H:i:s'),
                'method' => 'native_mail'
            ]
        ]);
    } else {
        debug_log("❌ Failed to send email via native mail()");
        error_log("Mail Error: Failed to send email using mail() function");
        http_response_code(500);
        echo json_encode([
            'success' => false, 
            'message' => 'Failed to send message',
            'debug' => [
                'timestamp' => date('Y-m-d H:i:s'),
                'error' => 'Native mail() function failed'
            ]
        ]);
    }
}

debug_log("=== CONTACT FORM REQUEST COMPLETED ===");

?>