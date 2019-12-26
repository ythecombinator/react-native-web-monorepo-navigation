import React from 'react'

import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'

import { AppHeader } from './AppHeader'
import { Router } from './Router'

export function App() {
  return <Router />;
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white"
  }
});
