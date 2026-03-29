"use client";

export const dynamic = 'force-dynamic';

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import api from "../../lib/api";

function ProductsContent() {
  const searchParams = useSearchParams();
  // Tambah <any[]> biar gak dianggap never[]
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/products").then((res) => {
      setProducts(Array.isArray(res.data) ? res.data : []);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="pt-24 text-center">Loading products...</div>;

  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto pb-16">
      <h1 className="text-3xl font-light mb-8">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p: any) => (
          <div key={p.id} className="border p-4 rounded-xl">
            <h3 className="font-medium">{p.name}</h3>
            <p className="text-sm text-gray-500">{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="pt-24 text-center">Loading Page...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
