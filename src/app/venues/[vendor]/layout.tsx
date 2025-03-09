export default function VendorMainpageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="mx-auto max-w-[1300px]">{children}</div>;
}
