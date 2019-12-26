import React from 'react'

import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'

import { AppHeader } from '../AppHeader'
import { Link } from '../Link'
import { routesMap } from '../utils/router'
import { styles } from './styles'

export function WebSupport() {
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
              <Text style={styles.sectionTitle}>
                Web support via react-native-web
              </Text>
              <Text style={styles.sectionDescription}>
                Run{" "}
                <Text style={styles.highlight}>yarn workspace web start</Text>{" "}
                to open this app in the browser.
              </Text>
              <Text style={styles.sectionDescription}>
                It will share the same code from mobile, unless you create
                platform-specific files using the{" "}
                <Text style={styles.highlight}>.web.tsx</Text> extension (also
                supports <Text style={styles.highlight}>.android</Text>,{" "}
                <Text style={styles.highlight}>.ios</Text>,{" "}
                <Text style={styles.highlight}>.native</Text>, etc).
              </Text>
              <Link routeName={routesMap.features.codeSharing.path}>
                <Text style={styles.sectionLink}>
                  Check "Code sharing using Monorepo"
                </Text>
              </Link>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
