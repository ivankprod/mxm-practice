import Image from "next/image";

import { fontInter } from "@/app/fonts";
import Timer from "@/lib/ui/components/Timer";
import Button from "@/lib/ui/elements/Button";

import ImageSmartSpeaker from "@/images/jbl-boombox-2.png";

export const BannerSection: React.FC = () => {
	return (
		<section
			style={{
				display: "flex",
				flexDirection: "column",
				gap: 70,
				position: "relative"
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					height: 500,
					backgroundColor: "#000",
					color: "#fff"
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						gap: 32,
						padding: "58px 0 22px 64px"
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 24
						}}
					>
						<span style={{ marginTop: 4, color: "var(--button-green)" }}>
							Categories
						</span>
					</div>
					<h1
						className={fontInter.className}
						style={{
							fontSize: 48,
							fontWeight: 600,
							lineHeight: "60px",
							letterSpacing: "0.04em"
						}}
					>
						Enhance Your
						<br />
						Music Expirience
					</h1>
					<Timer
						remainingTime={{
							days: 3,
							hours: 23,
							minutes: 19,
							seconds: 56
						}}
						direction="backward"
						inBanner={true}
						style={{
							color: "#000"
						}}
					/>
					<Button
						type="green"
						style={{
							marginTop: 12
						}}
					>
						Buy Now
					</Button>
				</div>
				<div
					style={{
						position: "absolute",
						right: 114,
						top: 0,
						height: "100%",
						width: 504,
						filter: "blur(200px)",
						background: "rgb(217, 217, 217)",
						opacity: 0.3
					}}
				></div>
				<Image
					src={ImageSmartSpeaker}
					alt="JBL BOOMBOX 2"
					draggable={false}
					style={{
						position: "absolute",
						top: -14,
						right: 0,
						height: "100%",
						width: 740,
						objectFit: "cover",
						zIndex: 1
					}}
				/>
			</div>
		</section>
	);
};
