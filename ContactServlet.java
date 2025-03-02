
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation for handling inventory management operations.
 */
@WebServlet("/inventory")
public class ContactServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    
    // In-memory storage for inventory items (in a real app, this would use a database)
    private static final Map<Integer, InventoryItem> inventoryItems = new HashMap<>();
    private static int nextItemId = 1;
    
    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     * Used to retrieve inventory items
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        String itemId = request.getParameter("id");
        
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();
        
        // If item ID is provided, return that specific item
        if (itemId != null && !itemId.isEmpty()) {
            try {
                int id = Integer.parseInt(itemId);
                InventoryItem item = inventoryItems.get(id);
                
                if (item != null) {
                    out.print(convertItemToJson(item));
                } else {
                    sendErrorResponse(response, "Item not found");
                }
            } catch (NumberFormatException e) {
                sendErrorResponse(response, "Invalid item ID format");
            }
        } else {
            // Return all items
            List<InventoryItem> items = new ArrayList<>(inventoryItems.values());
            out.print(convertItemsToJson(items));
        }
        
        out.flush();
    }
    
    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     * Used to create new inventory items
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        try {
            // Parse request parameters
            String name = request.getParameter("name");
            String category = request.getParameter("category");
            int quantity = Integer.parseInt(request.getParameter("quantity"));
            double price = Double.parseDouble(request.getParameter("price"));
            String description = request.getParameter("description");
            
            // Validate input
            if (name == null || category == null || name.trim().isEmpty() || category.trim().isEmpty()) {
                sendErrorResponse(response, "Name and category are required");
                return;
            }
            
            if (quantity < 0) {
                sendErrorResponse(response, "Quantity cannot be negative");
                return;
            }
            
            if (price < 0) {
                sendErrorResponse(response, "Price cannot be negative");
                return;
            }
            
            // Create new item
            int id = nextItemId++;
            InventoryItem newItem = new InventoryItem(id, name, category, quantity, price, description);
            inventoryItems.put(id, newItem);
            
            // Send success response
            sendSuccessResponse(response, "Item created successfully", id);
            
            // Log the action
            System.out.println("Created inventory item: " + newItem);
            
        } catch (NumberFormatException e) {
            sendErrorResponse(response, "Invalid quantity or price format");
        } catch (Exception e) {
            sendErrorResponse(response, "An error occurred: " + e.getMessage());
        }
    }
    
    /**
     * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
     * Used to update existing inventory items
     */
    protected void doPut(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        try {
            // Parse item ID
            String itemIdStr = request.getParameter("id");
            if (itemIdStr == null || itemIdStr.isEmpty()) {
                sendErrorResponse(response, "Item ID is required");
                return;
            }
            
            int itemId = Integer.parseInt(itemIdStr);
            
            // Check if item exists
            if (!inventoryItems.containsKey(itemId)) {
                sendErrorResponse(response, "Item not found");
                return;
            }
            
            // Get existing item
            InventoryItem existingItem = inventoryItems.get(itemId);
            
            // Parse and validate update fields
            String name = request.getParameter("name");
            String category = request.getParameter("category");
            String quantityStr = request.getParameter("quantity");
            String priceStr = request.getParameter("price");
            String description = request.getParameter("description");
            
            // Update fields if provided
            if (name != null && !name.trim().isEmpty()) {
                existingItem.setName(name);
            }
            
            if (category != null && !category.trim().isEmpty()) {
                existingItem.setCategory(category);
            }
            
            if (quantityStr != null && !quantityStr.isEmpty()) {
                int quantity = Integer.parseInt(quantityStr);
                if (quantity < 0) {
                    sendErrorResponse(response, "Quantity cannot be negative");
                    return;
                }
                existingItem.setQuantity(quantity);
            }
            
            if (priceStr != null && !priceStr.isEmpty()) {
                double price = Double.parseDouble(priceStr);
                if (price < 0) {
                    sendErrorResponse(response, "Price cannot be negative");
                    return;
                }
                existingItem.setPrice(price);
            }
            
            if (description != null) {
                existingItem.setDescription(description);
            }
            
            // Send success response
            sendSuccessResponse(response, "Item updated successfully", itemId);
            
            // Log the action
            System.out.println("Updated inventory item: " + existingItem);
            
        } catch (NumberFormatException e) {
            sendErrorResponse(response, "Invalid ID, quantity, or price format");
        } catch (Exception e) {
            sendErrorResponse(response, "An error occurred: " + e.getMessage());
        }
    }
    
    /**
     * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
     * Used to delete inventory items
     */
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        try {
            // Parse item ID
            String itemIdStr = request.getParameter("id");
            if (itemIdStr == null || itemIdStr.isEmpty()) {
                sendErrorResponse(response, "Item ID is required");
                return;
            }
            
            int itemId = Integer.parseInt(itemIdStr);
            
            // Check if item exists
            if (!inventoryItems.containsKey(itemId)) {
                sendErrorResponse(response, "Item not found");
                return;
            }
            
            // Remove the item
            InventoryItem removedItem = inventoryItems.remove(itemId);
            
            // Send success response
            sendSuccessResponse(response, "Item deleted successfully", itemId);
            
            // Log the action
            System.out.println("Deleted inventory item: " + removedItem);
            
        } catch (NumberFormatException e) {
            sendErrorResponse(response, "Invalid ID format");
        } catch (Exception e) {
            sendErrorResponse(response, "An error occurred: " + e.getMessage());
        }
    }
    
    /**
     * Send a JSON success response
     */
    private void sendSuccessResponse(HttpServletResponse response, String message, int itemId) throws IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        
        PrintWriter out = response.getWriter();
        out.print("{\"success\": true, \"message\": \"" + message + "\", \"id\": " + itemId + "}");
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
    
    /**
     * Convert a single inventory item to JSON
     */
    private String convertItemToJson(InventoryItem item) {
        return "{" +
                "\"id\": " + item.getId() + ", " +
                "\"name\": \"" + item.getName() + "\", " +
                "\"category\": \"" + item.getCategory() + "\", " +
                "\"quantity\": " + item.getQuantity() + ", " +
                "\"price\": " + item.getPrice() + ", " +
                "\"description\": \"" + (item.getDescription() != null ? item.getDescription() : "") + "\"" +
                "}";
    }
    
    /**
     * Convert a list of inventory items to JSON
     */
    private String convertItemsToJson(List<InventoryItem> items) {
        StringBuilder json = new StringBuilder("[");
        
        for (int i = 0; i < items.size(); i++) {
            json.append(convertItemToJson(items.get(i)));
            
            if (i < items.size() - 1) {
                json.append(", ");
            }
        }
        
        json.append("]");
        return json.toString();
    }
    
    /**
     * Inner class representing an inventory item
     */
    private static class InventoryItem {
        private int id;
        private String name;
        private String category;
        private int quantity;
        private double price;
        private String description;
        
        public InventoryItem(int id, String name, String category, int quantity, double price, String description) {
            this.id = id;
            this.name = name;
            this.category = category;
            this.quantity = quantity;
            this.price = price;
            this.description = description;
        }
        
        public int getId() {
            return id;
        }
        
        public String getName() {
            return name;
        }
        
        public void setName(String name) {
            this.name = name;
        }
        
        public String getCategory() {
            return category;
        }
        
        public void setCategory(String category) {
            this.category = category;
        }
        
        public int getQuantity() {
            return quantity;
        }
        
        public void setQuantity(int quantity) {
            this.quantity = quantity;
        }
        
        public double getPrice() {
            return price;
        }
        
        public void setPrice(double price) {
            this.price = price;
        }
        
        public String getDescription() {
            return description;
        }
        
        public void setDescription(String description) {
            this.description = description;
        }
        
        @Override
        public String toString() {
            return "InventoryItem{" +
                    "id=" + id +
                    ", name='" + name + '\'' +
                    ", category='" + category + '\'' +
                    ", quantity=" + quantity +
                    ", price=" + price +
                    ", description='" + description + '\'' +
                    '}';
        }
    }
}
