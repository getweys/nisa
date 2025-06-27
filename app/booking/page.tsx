"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiClock, FiCamera } from "react-icons/fi";
import { Navigation } from "components/navigation";
import { Text } from "components/text";
import { AnimatedCard } from "components/animated-card";
import { AnimatedButton } from "components/animated-button";
import { Footer } from "components/footer";
// import { Navigation } from "@/components/navigation"
// import { Footer } from "@/components/footer"
// import { Text } from "@/components/text"
// import { AnimatedButton } from "@/components/animated-button"
// import { AnimatedCard } from "@/components/animated-card"

export default function BookingPage() {
  const [bookingData, setBookingData] = useState({
    pickup: "",
    destination: "",
    time: "now",
    rideType: "economy",
  });

  const rideTypes = [
    { id: "economy", price: "$8-12", time: "3-5 min" },
    { id: "comfort", price: "$12-18", time: "2-4 min" },
    { id: "premium", price: "$18-25", time: "1-3 min" },
  ];

  const handleInputChange = (field: string, value: string) => {
    setBookingData((prev) => ({ ...prev, [field]: value }));
  };

  const handleBookRide = () => {
    console.log("Booking ride:", bookingData);
    // Handle ride booking logic
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              <Text path="booking.title" />
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Booking Form */}
            <AnimatedCard>
              <div className="space-y-6">
                {/* Pickup Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FiMapPin className="inline w-4 h-4 mr-2" />
                    <Text path="booking.pickupLocation" />
                  </label>
                  <input
                    type="text"
                    value={bookingData.pickup}
                    onChange={(e) =>
                      handleInputChange("pickup", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Enter pickup location"
                  />
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FiMapPin className="inline w-4 h-4 mr-2" />
                    <Text path="booking.destination" />
                  </label>
                  <input
                    type="text"
                    value={bookingData.destination}
                    onChange={(e) =>
                      handleInputChange("destination", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Enter destination"
                  />
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FiClock className="inline w-4 h-4 mr-2" />
                    <Text path="booking.selectTime" />
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => handleInputChange("time", "now")}
                      className={`p-3 rounded-lg border-2 transition-colors ${
                        bookingData.time === "now"
                          ? "border-pink-500 bg-pink-50 text-pink-700"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <Text path="booking.now" />
                    </button>
                    <button
                      onClick={() => handleInputChange("time", "later")}
                      className={`p-3 rounded-lg border-2 transition-colors ${
                        bookingData.time === "later"
                          ? "border-pink-500 bg-pink-50 text-pink-700"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <Text path="booking.later" />
                    </button>
                  </div>
                </div>

                {/* Ride Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FiCamera className="inline w-4 h-4 mr-2" />
                    <Text path="booking.rideType" />
                  </label>
                  <div className="space-y-3">
                    {rideTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => handleInputChange("rideType", type.id)}
                        className={`w-full p-4 rounded-lg border-2 transition-colors text-left ${
                          bookingData.rideType === type.id
                            ? "border-pink-500 bg-pink-50"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-medium capitalize">
                              <Text path={`booking.${type.id}`} />
                            </div>
                            <div className="text-sm text-gray-500">
                              {type.time}
                            </div>
                          </div>
                          <div className="font-semibold text-pink-600">
                            {type.price}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <AnimatedButton
                  onClick={handleBookRide}
                  className="w-full"
                  size="lg"
                >
                  <Text path="booking.bookRide" />
                </AnimatedButton>
              </div>
            </AnimatedCard>

            {/* Map Placeholder */}
            <AnimatedCard delay={0.2}>
              <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <FiMapPin className="w-12 h-12 mx-auto mb-4" />
                  <p>Interactive Map</p>
                  <p className="text-sm">
                    Route visualization will appear here
                  </p>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
