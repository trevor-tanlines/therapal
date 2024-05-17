import { useCallback } from 'react';
import Image from 'next/image';
import styles from "@/components/Navbar/navbar.module.css";
import Link from 'next/link';


export default function navbar () {
  	
  	return (
    		<div className={styles.navbar}>
      			<div className={styles.navbarChild} />
      			<div className={styles.navbarItem} />
				  <div className={styles.home} onClick={onHomeContainerClick}>
					<Link href={"/homepage"}>
        				<div className={styles.notifications}>Home</div>
                <Image className={styles.homeIcon} src={"/Images/home.svg"} alt="Home" height={1} width={1}/>
				</Link>
      			</div>
      			<div className={styles.profile} onClick={onProfileContainerClick}>
					<Link href={"/programs"}>
        				<div className={styles.notifications}>Talk
						</div>
			
                		<Image className={styles.forYouIcon} src={"/Images/for_you.svg"} alt="Profile" height={1} width={1}/>
					</Link>
      			</div>
      			<div className={styles.emergency}>
						<Link href={"/emergency"}>
        				<div className={styles.notifications}>Emergency</div>
						<Image className={styles.callIcon} src={"/Images/call.svg"} alt="Emergency" height={1} width={1}/>
				</Link>
      			</div>
      		
    		</div>
			);
};

