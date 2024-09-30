import React from 'react';
import HeadingComponent from './HeadingComponent';

const ShippingComponent = () => {
  return (
    <>
     <HeadingComponent headingText="Product detail" pageText="Product detail" />
    <div className="container mx-auto p-8 bg-pink-50 mt-6">
      <h1 className="text-3xl font-bold mb-6 text-pink-600">Shipping & Returns</h1>
      
      {/* Shipping Information Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-pink-500">Shipping Information</h2>
        <p className="mb-4 text-gray-700">
          We offer standard and express shipping options for all orders. Shipping costs are calculated at checkout based on your location and the shipping method you choose.
        </p>
        <p className="mb-4 text-gray-700">
          All orders are processed within 2-3 business days. Once shipped, you will receive a confirmation email with tracking information.
        </p>
        <h3 className="text-lg font-semibold mb-2 text-pink-600">Shipping Times:</h3>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Standard Shipping: 5-7 business days</li>
          <li>Express Shipping: 2-3 business days</li>
        </ul>
      </section>
      
      {/* Returns Policy Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-pink-500">Return Policy</h2>
        <p className="mb-4 text-gray-700">
          We want you to be completely satisfied with your purchase. If you are not satisfied, you may return your order within 30 days of receipt for a full refund.
        </p>
        <h3 className="text-lg font-semibold mb-2 text-pink-600">To initiate a return:</h3>
        <ol className="list-decimal list-inside mb-4 text-gray-700">
          <li>Contact our customer service team at support@example.com to request a return.</li>
          <li>Pack the item securely in its original packaging.</li>
          <li>Ship the package back to us using the label provided.</li>
        </ol>
        <p className="mb-4 text-gray-700">
          Please allow 5-7 business days for your return to be processed once received. Refunds will be issued to the original payment method.
        </p>
      </section>
    </div>
    </>
  );
};

export default ShippingComponent;
