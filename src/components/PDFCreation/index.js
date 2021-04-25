import React from "react";
import {
  BlobProvider,
  Document,
  Page,
  Text,
  View,
  Image,
  Link,
  StyleSheet,
} from "@react-pdf/renderer";
import { image1 } from "../../assets/img/logo.jpg";

// Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: "column",
//   },
//   image: {
//     width: "30%",
//     padding: 10,
//   },
//   centerImage: {
//     alignItems: "center",
//     flexGrow: 1,
//   },
//   text: {
//     width: "100%",
//     backgroundColor: "#f0f0f0",
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     color: "#212121",
//   },
// });

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: "column",
  },
  text: {
    width: "100%",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "#212121",
  },
  logo: {
    width: 74,
    height: 66,
    marginLeft: "auto",
    marginRight: "auto",
  },
  titleContainer: {
    flexDirection: "row",
    marginTop: 50,
  },
  reportTitle: {
    color: "#61dafb",
    letterSpacing: 4,
    fontSize: 25,
    textAlign: "center",
    textTransform: "uppercase",
  },
  invoiceNoContainer: {
    flexDirection: "row",
    marginTop: 36,
    justifyContent: "flex-end",
  },
  invoiceDateContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  invoiceDate: {
    fontSize: 12,
    fontStyle: "bold",
  },
  label: {
    width: 60,
  },
});

export default function MyDocument({ pdfData, itemData }) {
  return (
    <Document>
      <Page style={styles.page} size="A4">
        <View style={styles.centerImage}>
          <Image style={styles.logo} src="../../../src/assets/img/logo1.jpg" />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.reportTitle}>Name : {pdfData.name}</Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <Text style={styles.text}>Phone : {pdfData.mobile}</Text>
          <Text style={styles.text}>Email : {pdfData.email}</Text>
          <Text style={styles.text}>Registered Sport : {itemData.name}</Text>
          <Text style={styles.text}>
            Sport Specialization: {itemData.sname}
          </Text>
          <Text style={styles.text}>Registered Date : {itemData.cddate}</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.reportTitle}>Amount Paid : Rs.300/-</Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.text}>
            Terms & Conditions 1) This Amount is not refundable 2) Incase of any
            issue call us at +91-7276346994 or drop email at
            'sports@xsportsz.com'
            <Text style={styles.text}>
              Learn more at{" "}
              <Link src="https://www.xsportsz.in">XSportsz.in</Link>
            </Text>
          </Text>
          <Text style={styles.text}>
            Learn more at <Link src="https://www.xsportsz.in">XSportsz.in</Link>
          </Text>
        </View>
      </Page>
    </Document>
  );
}
