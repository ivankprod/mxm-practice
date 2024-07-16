"use client";

import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { logoutUser } from "@/store/userSlise";
import { fontInter } from "@/app/fonts";
import Navigation from "@/components/Navigation";
import Search from "@/lib/ui/components/Search";
import ImageWishlist from "@/images/icons/wishlist.svg";
import ImageCart from "@/images/icons/cart.svg";
import ImageUser from "@/images/icons/user.svg";
import DropUser from "@/images/icons/user-dropd.svg";
import DropOrder from "@/images/icons/order.svg";
import DropCancallations from "@/images/icons/cancallations-dropd.svg";
import DropReviews from "@/images/icons/reviews-dropd.svg";
import DropLogout from "@/images/icons/logout-dropd.svg"
import { useState } from "react";

import styles from "./Header.module.css";

const Header: React.FC = () => {
	const [dropdownVisible, setDropdownVisible] = useState(false);
	const currentUser = useSelector((state: RootState) => state.user.currentUser);
	const dispatch = useDispatch();

	const handleMouseEnter = () => {
		if (currentUser) {
			setDropdownVisible(true);
		}
	};

	const handleMouseLeave = () => {
		setDropdownVisible(false);
	};

	const handleLogout = () => {
		dispatch(logoutUser());
	};

	return (
		<div className="container-wrapper">
			<div
				className="container"
				style={{
					display: "flex",
					justifyContent: "center",
					marginTop: 40
				}}
			>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						width: "100%",
						paddingBottom: 16,
						borderBottom: "0.5px solid var(--border)"
					}}
				>
					<Link href="/">
						<h1
							className={fontInter.className}
							style={{
								fontSize: 24,
								fontWeight: 800,
								letterSpacing: "0.03em",
								lineHeight: "24px"
							}}
						>
							Exclusive
						</h1>
					</Link>
					<Navigation />
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 24
						}}
					>
						<Search placeholder="What are you looking for?" inputStyle={{ minWidth: 162 }} />
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: 16
							}}
						>
							<Link href="/wishlist" style={{ display: "flex" }}>
								<Image src={ImageWishlist} alt="Wishlist" draggable={false} />
							</Link>
							<Link href="/cart" style={{ display: "flex" }}>
								<Image src={ImageCart} alt="Cart" draggable={false} />
							</Link>
							<div
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
								style={{ position: "relative", display: "flex", cursor: "pointer" }}
							>
								<Link href={currentUser ? "#" : "/create-account"} style={{ display: "flex" }}>
									<Image
										src={ImageUser}
										alt="User"
										draggable={false}
										className={currentUser ? styles.userIconActive : ""}
									/>
								</Link>
								{currentUser && dropdownVisible && (
									<div className={styles.userDropdown}>
										<ul>
											<li>
												<Link href="/manage-account">
													<span style={{
														display: "flex",
														alignItems: "center",
														fontWeight: "400",
														fontSize: 14
													}}>
													<Image src={DropUser} alt="Account Icon" width={32} height={32}
														   style={{ marginRight: 16 }} />
													Account
													</span>
												</Link>
											</li>
											<li>
												<Link href="/my-orders">
													<span style={{
														display: "flex",
														alignItems: "center",
														fontWeight: "400",
														fontSize: 14
													}}>
													<Image src={DropOrder} alt="Account Icon" width={32} height={32}
														   style={{ marginRight: 16 }} />
													My Orders
													</span>
												</Link>
											</li>
											<li>
												<Link href="/my-cancellations">
													<span style={{
														display: "flex",
														alignItems: "center",
														fontWeight: "400",
														fontSize: 14
													}}>
													<Image src={DropCancallations} alt="Account Icon" width={32} height={32}
														   style={{ marginRight: 16 }} />
													My Cancellations
													</span>
												</Link>
											</li>
											<li>
												<Link href="/my-reviews">
													<span style={{
														display: "flex",
														alignItems: "center",
														fontWeight: "400",
														fontSize: 14
													}}>
														<Image src={DropReviews} alt="Account Icon" width={32} height={32}
															   style={{ marginRight: 16 }} />
													My Reviews
													</span>

												</Link>
											</li>
											<li>
												<a
													onClick={handleLogout}
													className={styles.logout}
												>
													<span style={{
														display: "flex",
														alignItems: "center",
														fontWeight: "400",
														fontSize: 14
													}}>
														<Image src={DropLogout} alt="Account Icon" width={32} height={32}
															   style={{ marginRight: 16 }} />
													Logout
													</span>

												</a>
											</li>
										</ul>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
