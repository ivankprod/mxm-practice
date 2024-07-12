"use client";

import Link from "next/link";

import { fontInter } from "@/app/fonts";
import Caption from "@/lib/ui/components/Caption";
import Button from "@/lib/ui/elements/Button";
import Card from "@/lib/ui/components/Card";
import { useProducts } from "@/service/products";

import { TProduct } from "@/types";

export const ThisMonthProductsSection: React.FC = () => {
	const [thisMonthProducts] = useProducts({ type: "this-month" });

	return (
		<section
			style={{
				display: "flex",
				flexDirection: "column"
			}}
		>
			<Caption text="This Month" style={{ marginBottom: 17 }} />
			<div
				style={{
					display: "flex",
					alignItems: "flex-end",
					justifyContent: "space-between",
					marginBottom: 60
				}}
			>
				<div>
					<h1
						className={fontInter.className}
						style={{
							display: "inline",
							fontSize: 36,
							fontWeight: 600,
							lineHeight: "48px",
							letterSpacing: "0.04em"
						}}
					>
						Best Selling Products
					</h1>
				</div>
				<Button type="primary" as={Link} href="/products">
					View All
				</Button>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between"
				}}
			>
				{(thisMonthProducts as TProduct[]).map((product) => (
					<Card product={product} key={`this-month-product-${product.id}`} />
				))}
			</div>
		</section>
	);
};