import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const Detail = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const handleNextPress = () => {
    navigation.navigate('Login');
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // Perform the action when a QR code is scanned
    // Example: console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  const requestCameraPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const handleScannerPress = () => {
    setScanned(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Brownie Points</Text>
      <Text style={styles.subtitle}>Turn good behaviour into great rewards!</Text>
      {hasPermission === false ? (
        <Text style={styles.errorMessage}>Camera permission is not granted</Text>
      ) : (
        <View style={styles.qrScannerContainer}>
          {hasPermission === null && (
            <Text style={styles.loadingText}>Requesting camera permission...</Text>
          )}
          {hasPermission === true && (
            <>
              {!scanned ? (
                <BarCodeScanner
                  onBarCodeScanned={handleBarCodeScanned}
                  style={StyleSheet.absoluteFillObject}
                />
              ) : (
                <TouchableOpacity style={styles.scannerOverlay} onPress={handleScannerPress}>
                  <Text style={styles.scannerOverlayText}>Tap to Scan Again</Text>
                </TouchableOpacity>
              )}
              {!scanned && (
                <Text style={styles.qrScannerText}>Scan QR Code</Text>
              )}
            </>
          )}
        </View>
      )}
      {!scanned && (
        <TouchableOpacity style={styles.button} onPress={handleNextPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      )}
      {/* <Text style={styles.footerText}>© 2023 Brownie Points. All rights reserved.</Text> */}
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  errorMessage: {
    color: '#FF0000',
    marginBottom: 20,
  },
  loadingText: {
    fontSize: 16,
    marginBottom: 20,
  },
  qrScannerContainer: {
    flex: 1,
    width: '100%',
    aspectRatio: 1,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrScannerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  scannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scannerOverlayText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    backgroundColor: '#F76B8A',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  footerText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
  },
});
