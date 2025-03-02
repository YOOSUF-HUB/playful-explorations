
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation for handling contact form submissions.
 * This would be part of a Java web application using Servlets.
 */
@WebServlet("/contact")
public class ContactServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    
    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        // Get form parameters
        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String message = request.getParameter("message");
        
        // Validate input
        if (name == null || email == null || message == null ||
            name.trim().isEmpty() || email.trim().isEmpty() || message.trim().isEmpty()) {
            sendErrorResponse(response, "All fields are required");
            return;
        }
        
        // Validate email format
        if (!email.matches("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")) {
            sendErrorResponse(response, "Invalid email format");
            return;
        }
        
        // In a real application, you would:
        // 1. Store the contact message in a database
        // 2. Send an email notification
        // 3. Log the submission
        
        // For this example, we'll just simulate success
        boolean success = processContactForm(name, email, message);
        
        if (success) {
            sendSuccessResponse(response);
        } else {
            sendErrorResponse(response, "An error occurred while processing your request");
        }
    }
    
    /**
     * Process the contact form data
     * In a real application, this would save to database, send emails, etc.
     */
    private boolean processContactForm(String name, String email, String message) {
        // Log the contact submission
        System.out.println("Contact form submission received:");
        System.out.println("Name: " + name);
        System.out.println("Email: " + email);
        System.out.println("Message: " + message);
        
        // Simulate successful processing
        return true;
    }
    
    /**
     * Send a JSON success response
     */
    private void sendSuccessResponse(HttpServletResponse response) throws IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        
        PrintWriter out = response.getWriter();
        out.print("{\"success\": true, \"message\": \"Thank you for your message! I'll get back to you soon.\"}");
        out.flush();
    }
    
    /**
     * Send a JSON error response
     */
    private void sendErrorResponse(HttpServletResponse response, String errorMessage) throws IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        
        PrintWriter out = response.getWriter();
        out.print("{\"success\": false, \"message\": \"" + errorMessage + "\"}");
        out.flush();
    }
}
