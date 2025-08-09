import { useState, useEffect } from "react";
import { X } from "lucide-react";

export const CheckoutModal = ({ isOpen, onClose, cartItems, total }) => {
  const [formData, setFormData] = useState({
    // Payment fields
    paymentMethod: "visa",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",

    // Delivery fields
    address1: "",
    district: "",
    department: "",
    zipCode: "",
    country: "PE",
    phone: "",

    // Notes
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Función para formatear la fecha de expiración
  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Solo números

    if (value.length >= 2) {
      value = value.substring(0, 2) + "/" + value.substring(2, 4);
    }

    setFormData({
      ...formData,
      expiryDate: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Checkout data:", formData);
    // Aquí integrarías con tu API de pagos
    onClose();
  };

  // Deshabilitar scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      // Guardar el scroll actual
      const scrollY = window.scrollY;

      // Deshabilitar scroll
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      // Restaurar scroll
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      // Restaurar posición de scroll
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    // Cleanup al desmontar el componente
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // No necesitamos cálculos adicionales, solo el total del carrito

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="bg-secondary-accent rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="font-Primary-Poppins text-2xl font-semibold text-primary-dark">
            Checkout
          </h2>
          <button
            onClick={onClose}
            className="text-secondary-accent bg-state-danger rounded-md
            hover:cursor-pointer hover:scale-105 transition-all ease-in"
          >
            <X size={24} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-6"
        >
          {/* Order Summary */}
          <div>
            <h3 className="font-Secondary-Gidole text-lg font-semibold text-primary-dark mb-4">
              Order summary
            </h3>

            {/* Lista de productos */}
            <div className="space-y-3 mb-4">
              {cartItems.map((item) => (
                <div
                  key={item.idProduct}
                  className="flex justify-between items-center py-2 border-b border-gray-100"
                >
                  <div className="flex-1">
                    <h4 className="font-Tertiary-Inter text-sm font-medium text-primary-dark">
                      {item.name}
                    </h4>
                    <p className="font-Tertiary-Inter text-xs text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-Tertiary-Inter text-sm font-medium text-primary-dark">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <p className="font-Tertiary-Inter text-xs text-gray-500">
                      ${item.price} each
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Total final */}
            <div className="flex justify-between font-semibold text-lg border-t pt-3">
              <span className="font-Secondary-Gidole text-primary-dark">
                Total
              </span>
              <span className="font-Secondary-Gidole text-primary-dark">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="font-Secondary-Gidole text-lg font-semibold text-primary-dark mb-4">
              Payment Method
            </h3>

            {/* Selector de método de pago */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-3 mb-4">
                {[
                  "visa",
                  "mastercard",
                  "american-express",
                  "dinners-club",
                  "paypal",
                ].map((method) => (
                  <label
                    key={method}
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method}
                      checked={formData.paymentMethod === method}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div
                      className={`
                      font-Tertiary-Inter px-4 py-2 rounded-md transition-all
                      ${
                        formData.paymentMethod === method
                          ? " bg-secondary-light text-primary-dark scale-105"
                          : "bg-primary-light text-secondary-light"
                      }
                    `}
                    >
                      <span className="font-Tertiary-Inter text-sm font-medium capitalize">
                        {method.replace("-", " ")}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Campos de tarjeta (solo si no es PayPal) */}
            {formData.paymentMethod !== "paypal" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="font-Tertiary-Inter block text-sm text-gray-600 mb-2">
                    Card Number*
                  </label>

                  {/* 
                  <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="font-Tertiary-Inter w-full p-3 border-b-2 border-secondary-dark outline-none focus:border-primary-light placeholder-secondary-dark"
                />
                <select
                  name="gender"
                  id="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="font-Tertiary-Inter w-full p-3 border-b-2 border-secondary-dark outline-none focus:border-primary-light placeholder-secondary-dark"
                >
                  <option
                    value=""
                    disabled
                    className=""
                  >
                    Select gender
                  </option>
                  <option value="male">Masculine</option>
                  <option value="female">Masculine</option>
                  <option value="other">Other</option>
                  <option value="prefer_not_to_say">I prefer not to say</option>
                </select>

                <input
                  type="date"
                  name="dateOfBirth"
                  id="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                  className="font-Tertiary-Inter w-full p-3 border-b-2 border-secondary-dark outline-none focus:border-primary-light placeholder-secondary-dark"
                />
                */}
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                    className="font-Tertiary-Inter w-full p-3 border-b-2 border-secondary-dark outline-none focus:border-primary-light placeholder-secondary-dark"
                    required
                  />
                </div>
                <div>
                  <label className="font-Tertiary-Inter block text-sm text-gray-600 mb-2">
                    Expiry Date*
                  </label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleExpiryChange}
                    placeholder="MM/YY"
                    maxLength="5"
                    className="font-Tertiary-Inter w-full p-3 border-b-2 border-secondary-dark outline-none focus:border-primary-light placeholder-secondary-dark"
                    required
                  />
                </div>
                <div>
                  <label className="font-Tertiary-Inter block text-sm text-gray-600 mb-2">
                    CVV*
                  </label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="123"
                    maxLength="4"
                    className="font-Tertiary-Inter w-full p-3 border-b-2 border-secondary-dark outline-none focus:border-primary-light placeholder-secondary-dark"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="font-Tertiary-Inter block text-sm text-gray-600 mb-2">
                    Cardholder Name*
                  </label>
                  <input
                    type="text"
                    name="cardholderName"
                    value={formData.cardholderName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="font-Tertiary-Inter w-full p-3 border-b-2 border-secondary-dark outline-none focus:border-primary-light placeholder-secondary-dark"
                    required
                  />
                </div>
              </div>
            )}

            {/* Información de PayPal */}
            {formData.paymentMethod === "paypal" && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <div>
                    <p className="font-Tertiary-Inter font-medium text-blue-800">
                      PayPal
                    </p>
                    <p className="font-Tertiary-Inter text-sm text-blue-600">
                      You will be redirected to PayPal to complete your payment
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Delivery Details */}
          <div>
            <h3 className="font-Secondary-Gidole text-lg font-semibold text-primary-dark mb-4">
              Delivery Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="font-Tertiary-Inter block text-sm text-gray-600 mb-2">
                  Address*
                </label>
                <input
                  type="text"
                  name="address1"
                  value={formData.address1}
                  onChange={handleChange}
                  placeholder="Av. Javier Prado 123"
                  className="font-Tertiary-Inter w-full p-3 border-b-2 border-secondary-dark outline-none focus:border-primary-light placeholder-secondary-dark"
                  required
                />
              </div>
              <div>
                <label className="font-Tertiary-Inter block text-sm text-gray-600 mb-2">
                  District*
                </label>
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  placeholder="San Isidro"
                  className="font-Tertiary-Inter w-full p-3 border-b-2 border-secondary-dark outline-none focus:border-primary-light placeholder-secondary-dark"
                  required
                />
              </div>
              <div>
                <label className="font-Tertiary-Inter block text-sm text-gray-600 mb-2">
                  Department*
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="font-Tertiary-Inter w-full p-3 border-b-2 border-secondary-dark outline-none focus:border-primary-light placeholder-secondary-dark"
                  required
                >
                  <option
                    disabled
                    value=""
                  >
                    Select Department
                  </option>
                  <option value="Lima">Lima</option>
                  <option value="Arequipa">Arequipa</option>
                  <option value="Cusco">Cusco</option>
                  <option value="Trujillo">Trujillo</option>
                  <option value="Piura">Piura</option>
                </select>
              </div>

              <div>
                <label className="font-Tertiary-Inter block text-sm text-gray-600 mb-2">
                  Zip Code*
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="15036"
                  className="font-Tertiary-Inter w-full p-3 border-b-2 border-secondary-dark outline-none focus:border-primary-light placeholder-secondary-dark"
                  required
                />
              </div>
              <div>
                <label className="font-Tertiary-Inter block text-sm text-gray-600 mb-2">
                  Country*
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="font-Tertiary-Inter w-full p-3 border-b-2 border-secondary-dark outline-none focus:border-primary-light placeholder-secondary-dark"
                  required
                >
                  <option value="PE">Peru</option>
                  <option value="US">United States</option>
                  <option value="MX">Mexico</option>
                  <option value="CO">Colombia</option>
                </select>
              </div>
              <div>
                <label className="font-Tertiary-Inter block text-sm text-gray-600 mb-2">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+51 987654321"
                  className="font-Tertiary-Inter w-full p-3 border-b-2 border-secondary-dark outline-none focus:border-primary-light placeholder-secondary-dark"
                  required
                />
              </div>
            </div>
          </div>

          {/* Notes */}
          <div>
            <h3 className="font-Secondary-Gidole text-lg font-semibold text-primary-dark mb-4">
              Order Notes
            </h3>
            <div>
              <label className="font-Tertiary-Inter block text-sm text-gray-600 mb-2">
                Additional Notes (Optional)
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Special delivery instructions, gift message, etc."
                rows="4"
                className="font-Tertiary-Inter w-full p-3 border-2 border-secondary-dark outline-none focus:border-primary-light placeholder-secondary-dark"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
            <button
              type="submit"
              className="font-Tertiary-Inter flex-1 bg-primary-accent text-secondary-accent py-3 px-6 rounded-md font-medium
              hover:bg-primary-light hover:scale-105 transition-all ease-in"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={onClose}
              className="font-Tertiary-Inter flex-1 bg-state-danger text-secondary-accent py-3 px-6 rounded-md font-medium 
              hover:scale-105 transition-all ease-in"
            >
              Continue Shopping
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
