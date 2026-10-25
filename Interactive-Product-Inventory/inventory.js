// ==========================================
// INTERACTIVE PRODUCT INVENTORY & ANALYTICS
// ==========================================

console.log("--- Initializing Inventory System ---");

// Pre-existing inventory
let inventory = [
    {
        name: "Laptop",
        price: 800
    },
    {
        name: "Mouse",
        price: 25
    }
];

console.log("Initial Inventory:");
console.log(inventory);
// ==========================================
// USER INPUT - ADD NEW PRODUCT
// ==========================================

let productName = prompt("Enter the new product name:");

let productPrice = prompt("Enter the product price:");


// Remove extra spaces
productName = productName ? productName.trim() : "";

// Convert price from String to Number
productPrice = Number(productPrice);


// ==========================================
// INPUT VALIDATION
// ==========================================

if (productName === "" || isNaN(productPrice) || productPrice <= 0) {

    console.log("Invalid product details.");
    console.log("Product was not added.");

} else {

    inventory.push({
        name: productName,
        price: productPrice
    });

    console.log(
        `[Prompt executed: User adds "${productName}" at "$${productPrice}"]`
    );
}
// ==========================================
// PRODUCT CATEGORY
// ==========================================

function determineCategory(price) {

    if (price < 100) {
        return "Budget";

    } else if (price < 500) {
        return "Standard";

    } else {
        return "Premium";
    }
}
// ==========================================
// CATEGORY BADGE USING SWITCH
// ==========================================

function getCategoryBadge(category) {

    switch (category) {

        case "Budget":
            return "Budget";

        case "Standard":
            return "Standard";

        case "Premium":
            return "Premium";

        default:
            return "Unknown";
    }
}
// ==========================================
// TEST PRODUCT CATEGORIES
// ==========================================

console.log("\n--- Product Categories ---");

inventory.forEach(function(item) {

    let category = determineCategory(item.price);

    let badge = getCategoryBadge(category);

    console.log(
        `${item.name} ($${item.price}) -> ${badge}`
    );

});
// ==========================================
// LOOPS AND FLOW CONTROL
// ==========================================

console.log("\n--- Processing Inventory Roster ---");

for (let i = 0; i < inventory.length; i++) {

    let item = inventory[i];

    // Skip missing or invalid products
    if (
        !item ||
        !item.name ||
        typeof item.price !== "number" ||
        isNaN(item.price)
    ) {
        continue;
    }

    // Stop processing if a negative price is found
    if (item.price < 0) {
        console.log("Invalid negative price found. Stopping.");
        break;
    }

    let category = determineCategory(item.price);

    console.log(
        `* Item: ${item.name} ($${item.price}) -> Category: ${category}`
    );
}
// ==========================================
// FOREACH - FINAL INVENTORY SHEET
// ==========================================

console.log("\n--- Final Inventory Sheet (forEach) ---");

inventory.forEach((item) => {

    item.category = getCategoryBadge(
        determineCategory(item.price)
    );

    console.log(
        `${item.name} -> $${item.price} -> ${item.category}`
    );

});
// ==========================================
// TOTAL INVENTORY VALUE
// ==========================================

function calculateTotalInventoryValue(items) {

    // Local variable
    let total = 0;

    items.forEach((item) => {
        total = total + item.price;
    });

    return total;
}

let totalInventoryValue =
    calculateTotalInventoryValue(inventory);
    // ==========================================
// FILTER - AFFORDABLE PRODUCTS
// ==========================================

const affordableItems = inventory.filter((item) => {

    return item.price < 200;

});
// ==========================================
// MAP - FORMATTED REPORT
// ==========================================

const formattedReport = inventory.map((item) => {

    return `${item.name.toUpperCase()}: $${item.price}`;

});
// ==========================================
// FINANCIAL ANALYTICS
// ==========================================

console.log("\n--- Financial Analytics ---");

console.log(
    `Total Inventory Value: $${totalInventoryValue}`
);

console.log(
    "Filtered Affordable Items (Under $200):",
    affordableItems.map((item) => item.name)
);

console.log(
    "Formatted Report List:",
    formattedReport
);
// ==========================================
// TAX CALCULATION - ARROW FUNCTION
// ==========================================

const calculateTax = (price, taxRate) => {

    const taxAmount = price * (taxRate / 100);

    return price + taxAmount;
};
// ==========================================
// DISCOUNT CALCULATION - ARROW FUNCTION
// ==========================================

const calculateDiscount = (price, discountRate) => {

    const discountAmount = price * (discountRate / 100);

    return price - discountAmount;
};
// ==========================================
// TAX & DISCOUNT DEMONSTRATION
// ==========================================

console.log("\n--- Tax & Discount Calculation ---");

let laptopPrice = inventory[0].price;

let priceWithTax = calculateTax(laptopPrice, 10);

let priceAfterDiscount = calculateDiscount(laptopPrice, 10);

console.log(`Original Laptop Price: $${laptopPrice}`);

console.log(`Price after 10% Tax: $${priceWithTax}`);

console.log(`Price after 10% Discount: $${priceAfterDiscount}`);