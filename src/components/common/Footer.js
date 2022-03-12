import React from "react";
import {FaTwitter, FaFacebook, FaInstagram} from "react-icons/fa"


export default function Footer() {
	let year = new Date().getFullYear()

	let socialLinks = [
		{
			
			link: "https://twitter.com/MCL_ACM",
			icon: <FaTwitter size={35} />
		},
		{
			
			link: "https://fb.me/acmMCL",
			icon: <FaFacebook size={35} />
		},
		{
			
			link: "https://www.instagram.com/acm_mcl/",
			icon: <FaInstagram size={35} />
		},
	]

	return (
		<div className="bg-gradient-to-tr from-standard-blue to-cerulean-crayola text-white">
			<div className="flex flex-col gap-y-[2.375rem]">
				<div className="flex flex-col gap-y-[1.0625rem]">
					<p className="text-sm font-light">Connect with us</p>
					<p className="text-lg">Pulo Diezmo Rd, Pulo, Cabuyao, Laguna 4026, Philippines</p>
					<p className="text-lg">acm.mclstudchapter@gmail.com</p>
				</div>
				<div className="flex flex-col gap-y-[1.0625rem]">
					<p className="text-sm font-light">Keep in touch</p>
					<div className="flex gap-x-3.5">
						{
							socialLinks.map(({link, icon}) => <a href={link}>{icon}</a>)
						}
					</div>
				</div>
			</div>
			<p className="text-lg font-light text-center">© {year} Malayan Colleges Laguna ACM Student Chapter</p>
		</div>
	);
}
