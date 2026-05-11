// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900">
      © {new Date().getFullYear()} Shawn Mugambi. All rights reserved.
    </footer>
  );
}
