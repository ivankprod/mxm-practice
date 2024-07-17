import Image from "next/image";

import Breadcrumb from "@/components/Breadcrumb";
import { Button, TextArea, TextField } from "@/lib/ui/elements";

import callIcon from "@/images/icons/phone-contact.svg";
import mailIcon from "@/images/icons/mail-contact.svg";

import styles from "./contact.module.css";

export default function Contact() {
	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column",
				gap: 0
			}}
		>
			<Breadcrumb />
			<section
				style={{
					display: "flex",
					margin: "80px 0 140px"
				}}
			>
				<aside
					style={{
						borderRadius: 4,
						boxShadow: "0px 1px 13px 0px rgba(0, 0, 0, 0.05)",
						background: "rgb(255, 255, 255)",
						padding: "40px 35px",
						width: 340
					}}
				>
					<div className={styles.box}>
						<h3>
							<Image src={callIcon} alt="Call" />
							Call To Us
						</h3>
						<p
							style={{
								marginTop: 24
							}}
						>
							We are available 24/7, 7 days a week.
						</p>
						<p>Phone: +88015-88888-9999</p>
						<span></span>
						<h3>
							<Image src={mailIcon} alt="Mail" />
							Write To Us
						</h3>
						<p
							style={{
								marginTop: 24
							}}
						>
							Fill out our form and we will contact you within 24 hours.
						</p>
						<p>
							Email:{" "}
							<a href="mailto:customer@exclusive.com">customer@exclusive.com</a>
						</p>
						<p>
							Email: <a href="mailto:support@exclusive.com">support@exclusive.com</a>
						</p>
					</div>
				</aside>
				<form className={styles.contactForm}>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							width: "100%"
						}}
					>
						<TextField placeholder="Your Name*" className={styles.inputField} />
						<TextField
							type="email"
							placeholder="Your Email*"
							className={styles.inputField}
						/>
						<TextField
							type="tel"
							pattern="\+[0-9]-[0-9]{3}-[0-9]{3}-[0-9]{4}"
							placeholder="Your Phone*"
							className={styles.inputField}
						/>
					</div>
					<TextArea placeholder="Your Message" className={styles.textArea}></TextArea>
					<Button type="primary" submit style={{ height: 59 }}>
						Send Message
					</Button>
				</form>
			</section>
		</main>
	);
}
