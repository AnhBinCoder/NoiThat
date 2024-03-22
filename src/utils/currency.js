export function convertToCurrency(amount) {
    // Ensure that the amount is a valid number
    if (isNaN(amount)) {
        return "Invalid input";
    }

    // Convert the number to a formatted currency string
    const formattedAmount = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);

    // Replace the default currency symbol with the specified one
    // const result = formattedAmount.replace('₫', VND);

    return formattedAmount;
}

