import React from "react";
import {FaTwitter, FaFacebook, FaInstagram} from "react-icons/fa"
import FooterBG from '../../images/svg/footer-background.svg'

export default function Footer() { // TODO: Can someone try to set the height of the parent div to wrap its children (.incld background image). Parent height is currently set hard-valued
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
		<div className="absolute bottom-0 w-full">
			<div className="relative h-[34.8125rem]"> 
				<div className="text-white absolute h-full w-full pt-24 flex flex-col justify-between px-5">
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
					<p className="text-lg font-light text-center mb-11">© {year} Malayan Colleges Laguna ACM Student Chapter</p>
				</div>
				<img className="absolute z-[-100] w-full" src={FooterBG} alt="footer background" />
			</div>
		</div>

	);
}
