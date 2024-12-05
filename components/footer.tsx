export const Footer = () => {
	return (
		<div id="footer-copyright">
			<div className="flex gap-4">
				<p>
					<a
						href="https://zephyr-cloud.io/discord"
						target="_blank"
						rel="noreferrer"
					>
						Discord
					</a>
				</p>
				<p>
					<a
						href="https://www.linkedin.com/company/zephyr-cloud"
						target="_blank"
						rel="noreferrer"
					>
						LinkedIn
					</a>
				</p>
			</div>
			<div className="flex gap-4">
				<p>
					<a
						href="https://zephyr-cloud.io/privacy-policy"
						target="_blank"
						rel="noreferrer"
					>
						Privacy Policy
					</a>
				</p>
				<p>
					<a
						href="https://zephyr-cloud.io/pricing"
						target="_blank"
						rel="noreferrer"
					>
						Pricing
					</a>
				</p>
				<p>
					<a
						href="https://zephyr-cloud.io/faqs"
						target="_blank"
						rel="noreferrer"
					>
						FAQs
					</a>
				</p>
				<p>
					<a
						href="https://zephyr-cloud.io/blog"
						target="_blank"
						rel="noreferrer"
					>
						Blog
					</a>
				</p>
				<p>
					<a
						href="https://zephyr-cloud.io/contact"
						target="_blank"
						rel="noreferrer"
					>
						Contact
					</a>
				</p>
			</div>
			<p className="mt-3">
				© {new Date().getFullYear()} <b>Zephyr Cloud</b>. All rights reserved.
			</p>
		</div>
	);
};
