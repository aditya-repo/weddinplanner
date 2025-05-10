export default function VendorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="bg-gray-100">{children}</div>;
}
