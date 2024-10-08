import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../../components/Home/Header";
import Slider from "../../components/Home/Slider";
import Catergory from "../../components/Home/Catergory";
import PopularBusiness from "../../components/Home/PopularBusiness";

export default function home() {
  return (
    <ScrollView>
      {/* Header */}
      <Header />
      {/* Slider */}
      <Slider />
      {/* Category */}
      <Catergory />
      {/* Popular Business List */}
      <PopularBusiness />

      <View style={{ height: 50 }}></View>
    </ScrollView>
  );
}
