"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Используем usePathname вместо useRouter
import { useUsers } from "@/service/users";
import { TextField, Button } from "@/lib/ui/elements";
import { useFormik } from "formik";
import * as Yup from "yup";
import { fontOpenSans } from "@/app/fonts";

const AccountPage: React.FC = () => {
	const [, currentUser, { updateUser }] = useUsers();
	const currentPath = usePathname(); // Получаем текущий путь

	const formik = useFormik({
		initialValues: {
			firstName: currentUser?.firstName || "",
			lastName: currentUser?.lastName || "",
			email: currentUser?.email || "",
			address: currentUser?.address || "",
			currentPassword: "",
			newPassword: "",
			confirmPassword: ""
		},
		validationSchema: Yup.object({
			firstName: Yup.string().required("First name is required"),
			lastName: Yup.string().required("Last name is required"),
			email: Yup.string().email("Invalid email").required("Email is required"),
			newPassword: Yup.string().min(6, "Password must be at least 6 characters"),
			confirmPassword: Yup.string().oneOf(
				[Yup.ref("newPassword"), null],
				"Passwords must match"
			)
		}),
		onSubmit: (values) => {
			updateUser({
				firstName: values.firstName,
				lastName: values.lastName,
				email: values.email,
				address: values.address,
				password: values.newPassword
			});
		}
	});

	return (
		<div style={{ display: "flex", justifyContent: 'space-between'}}>
			<div style={{ width: "200px", marginRight: "40px" }}>
				<h3 className={fontOpenSans.className} style={{ fontSize: 16, fontWeight: 500}}>Manage My Account</h3>
				<ul style={{ listStyle: "none", padding: "16px 0 20px 35px" }}>
					<MyLink href="/account" currentPath={currentPath}>
						My Profile
					</MyLink>
					<MyLink href="/account/address-book" currentPath={currentPath}>
						Address Book
					</MyLink>
					<MyLink href="/account/payment-options" currentPath={currentPath}>
						My Payment Options
					</MyLink>
				</ul>
				<h3 className={fontOpenSans.className} style={{ fontSize: 16, fontWeight: 500}}>My Orders</h3>
				<ul style={{ listStyle: "none", padding: "18px 0 10px 35px"  }}>
					<MyLink href="/account/returns" currentPath={currentPath}>
						My Returns
					</MyLink>
					<MyLink href="/account/cancellations" currentPath={currentPath}>
						My Cancellations
					</MyLink>
				</ul>
				<h3 className={fontOpenSans.className} style={{ fontSize: 16, fontWeight: 500}}>My WishList</h3>
				
			</div>

			<div style={{ width: 870, padding: "40px 80px", boxShadow: "0px 1px 13px 0px rgba(0, 0, 0, 0.05)" }}>
				<h2 style={{ fontSize: 20, fontWeight: 500, marginBottom: "20px", color: "var(--background-primary)" }}>Edit Your Profile</h2>
				<form onSubmit={formik.handleSubmit}>
					<div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
						<TextField
							name="firstName"
							placeholder="First Name"
							value={formik.values.firstName}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.errors.firstName}
						/>
						<TextField
							name="lastName"
							placeholder="Last Name"
							value={formik.values.lastName}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.errors.lastName}
						/>
					</div>
					<div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
						<TextField
							name="email"
							placeholder="Email"
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.errors.email}
						/>
						<TextField
							name="address"
							placeholder="Address"
							value={formik.values.address}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.errors.address}
						/>
					</div>
					<h3 style={{ marginBottom: "10px" }}>Password Changes</h3>
					<div style={{ marginBottom: "20px" }}>
						<TextField
							name="currentPassword"
							type="password"
							placeholder="Current Password"
							value={formik.values.currentPassword}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</div>
					<div style={{ marginBottom: "20px" }}>
						<TextField
							name="newPassword"
							type="password"
							placeholder="New Password"
							value={formik.values.newPassword}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.errors.newPassword}
						/>
					</div>
					<div style={{ marginBottom: "20px" }}>
						<TextField
							name="confirmPassword"
							type="password"
							placeholder="Confirm New Password"
							value={formik.values.confirmPassword}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.errors.confirmPassword}
						/>
					</div>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<Button type="secondary" >
							Cancel
						</Button>
						<Button>
							Save Changes
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

const MyLink: React.FC<{
	href: string;
	currentPath: string;
	children: React.ReactNode;
}> = ({ href, currentPath, children }) => {
	const isActive = href === currentPath;

	return (
		<li style={{ marginBottom: "10px" }}>
			<Link href={href}>
				<span style={{ color: isActive ? "red" : "grey", cursor: "pointer" }}>
					{children}
				</span>
			</Link>
		</li>
	);
};

export default AccountPage;
