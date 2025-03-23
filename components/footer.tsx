"use client";

export function Footer() {
  const year = new Date().getFullYear().toString();

  return (
    <footer className="border-t py-8 bg-muted/40">
      <div className="container text-center">
        <p className="text-muted-foreground">
          © {year} Rachit Katyal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
