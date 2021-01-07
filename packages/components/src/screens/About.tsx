import React from 'react'

import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

import { AppHeader } from '../AppHeader'
import { styles } from './styles'

export function About() {
  return (
    <>
      <SafeAreaView>
        <AppHeader />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>About</Text>
              <Text style={styles.sectionDescription}>
                A universal navigation strategy for codebases containing both
                React and React Native developed by Matheus Albuquerque (
                <Text style={styles.highlight}>ythecombinator</Text>).
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}
