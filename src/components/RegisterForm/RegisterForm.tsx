"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { fontInter } from "@/app/fonts";
import { Button, TextField } from "@/lib/ui/elements";
import { LoginGoogleButton } from "@/lib/ui/components";
import { validatePhone, validatePassword } from "@/lib/utils/validation";

import { useUsers } from "@/service/users";

const RegisterForm: React.FC = () => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");

	const [errors, setErrors] = useState<{
		name?: string | null;
		phone?: string | null;
		password?: string | null;
	}>({});

	const router = useRouter();

	const [, currentUser, { registerUser }] = useUsers();

	useEffect(() => {
		if (currentUser) router.push("/");
	}, [currentUser, router]);

	const handleRegister = (e: React.FormEvent) => {
		e.preventDefault();

		let phoneError = validatePhone(phone);
		let passwordError = validatePassword(password);

		if (phoneError || passwordError) {
			setErrors({ phone: phoneError, password: passwordError });
		} else {
			registerUser({ name, phone, password });

			router.push("/sign-in");
		}
	};

	return (
		<div>
			<h2
				className={fontInter.className}
				style={{
					fontSize: 36,
					fontWeight: 500,
					lineHeight: "30px",
					letterSpacing: "0.04em"
				}}
			>
				Create an account
			</h2>
			<p style={{ margin: "24px 0 48px" }}>Enter your details below</p>
			<form
				onSubmit={handleRegister}
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "stretch",
					width: "100%",
					textAlign: "start"
				}}
			>
				<div style={{ position: "relative" }}>
					<TextField
						as="flat"
						type="text"
						placeholder="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						error={errors.name!}
					/>
				</div>
				<div
					style={{
						margin: "40px 0",
						position: "relative"
					}}
				>
					<div style={{ position: "relative" }}>
						<TextField
							as="flat"
							type="text"
							value={phone}
							placeholder="Email or Phone Number"
							onChange={(e) => setPhone(e.target.value)}
							error={errors.phone!}
						/>
					</div>
				</div>
				<div style={{ position: "relative" }}>
					<TextField
						as="flat"
						placeholder="Password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						error={errors.password!}
					/>
				</div>
				<Button type="primary" submit style={{ margin: "40px 0 16px" }}>
					Create Account
				</Button>
				<LoginGoogleButton />
			</form>
		</div>
	);
};

export default RegisterForm;
