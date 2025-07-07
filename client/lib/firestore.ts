import {
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
} from "firebase/firestore";
import { db } from "./firebase";

// App ID from Firebase config
const APP_ID = "1:94489305748:web:f3b8aa01ac513b4e2c4a81";

// Firestore path: artifacts/{appId}/public/data/portfolio
const COLLECTION_PATH = `artifacts/${APP_ID}/public/data`;
const PORTFOLIO_DOC_ID = "portfolio";

// Portfolio data interface
export interface PortfolioData {
  description: string;
  views: number;
  name?: string;
  title?: string;
  email?: string;
  lastUpdated?: string;
}

// Default portfolio data
const DEFAULT_PORTFOLIO_DATA: PortfolioData = {
  description: "portfolio data",
  views: 0,
  name: "Kosuri Gowry Sankar",
  title: "B.Tech CSE | Web Dev | Cybersecurity & AI Enthusiast",
  email: "23jr1a05b3@gmail.com",
  lastUpdated: new Date().toISOString(),
};

/**
 * Get portfolio data from Firestore with enhanced error handling
 * @returns Promise<PortfolioData | null>
 */
export async function getPortfolioData(): Promise<PortfolioData | null> {
  try {
    const docRef = doc(db, COLLECTION_PATH, PORTFOLIO_DOC_ID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data() as PortfolioData;
      console.log("Portfolio data retrieved successfully");
      return data;
    } else {
      console.log("Portfolio document doesn't exist, creating initial data...");
      // Create initial document if it doesn't exist
      await setDoc(docRef, DEFAULT_PORTFOLIO_DATA);
      return DEFAULT_PORTFOLIO_DATA;
    }
  } catch (error) {
    console.error("Error getting portfolio data:", error);
    // Return default data if Firestore fails
    return {
      ...DEFAULT_PORTFOLIO_DATA,
      description: "portfolio data (offline mode)",
    };
  }
}

/**
 * Increment view count in Firestore with error handling
 * @returns Promise<boolean> - Returns true if successful
 */
export async function incrementViews(): Promise<boolean> {
  try {
    const docRef = doc(db, COLLECTION_PATH, PORTFOLIO_DOC_ID);

    // Check if document exists first
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // Update existing document
      await updateDoc(docRef, {
        views: increment(1),
        lastUpdated: new Date().toISOString(),
      });
    } else {
      // Create document with initial data
      await setDoc(docRef, {
        ...DEFAULT_PORTFOLIO_DATA,
        views: 1,
      });
    }

    console.log("Portfolio views incremented successfully");
    return true;
  } catch (error) {
    console.error("Error incrementing views:", error);
    return false;
  }
}

/**
 * Initialize portfolio data if it doesn't exist
 * @returns Promise<boolean> - Returns true if successful
 */
export async function initializePortfolioData(): Promise<boolean> {
  try {
    const docRef = doc(db, COLLECTION_PATH, PORTFOLIO_DOC_ID);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      await setDoc(docRef, DEFAULT_PORTFOLIO_DATA);
      console.log("Portfolio data initialized at path:", COLLECTION_PATH);
      return true;
    } else {
      console.log("Portfolio data already exists");
      return true;
    }
  } catch (error) {
    console.error("Error initializing portfolio data:", error);
    return false;
  }
}

/**
 * Update portfolio data
 * @param data - Partial portfolio data to update
 * @returns Promise<boolean> - Returns true if successful
 */
export async function updatePortfolioData(
  data: Partial<PortfolioData>,
): Promise<boolean> {
  try {
    const docRef = doc(db, COLLECTION_PATH, PORTFOLIO_DOC_ID);
    await updateDoc(docRef, {
      ...data,
      lastUpdated: new Date().toISOString(),
    });
    console.log("Portfolio data updated successfully");
    return true;
  } catch (error) {
    console.error("Error updating portfolio data:", error);
    return false;
  }
}
