import React from 'react'

import { Button, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { AppHeader } from '../AppHeader'
import { Link } from '../Link'
import { useNavigation, useRoute } from '../utils/navigation'
import { routes } from '../utils/router'
import { styles } from './styles'

export function WebSupport() {
  const { params } = useRoute();
  const { goBack, navigate, replace } = useNavigation();

  console.log(params);

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

              {/* Navigate using <Link/> */}
              <Link
                path={routes.features.codeSharing.path}
                params={{ paramComingFromWebSupportRoute: 1 }}
              >
                <Text style={styles.sectionLink}>
                  Link to "Code sharing using Monorepo"
                </Text>
              </Link>

              {/* Navigate using navigate() */}
              <TouchableOpacity
                style={styles.button}
                accessibilityRole="button"
              >
                <Button
                  title={`Navigate to "Code sharing using Monorepo"`}
                  onPress={() => {
                    navigate(routes.features.codeSharing.path, {
                      paramComingFromWebSupportRoute: 2
                    });
                  }}
                />
              </TouchableOpacity>

              {/* Navigate using replace() */}
              <TouchableOpacity
                style={styles.button}
                accessibilityRole="button"
              >
                <Button
                  title={`Replace to "Code sharing using Monorepo"`}
                  onPress={() => {
                    replace(routes.features.codeSharing.path, {
                      paramComingFromWebSupportRoute: 3
                    });
                  }}
                />
              </TouchableOpacity>

              {/* Navigate using goBack() */}
              <TouchableOpacity
                style={styles.button}
                accessibilityRole="button"
              >
                <Button title="Go back" onPress={goBack} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
