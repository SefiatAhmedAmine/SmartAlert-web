import React from 'react'
import Link from "next/link"
function index() {
  return (
    <div className="quick-link-area">
      <ul className="wow fadeInUp" data-wow-delay="200ms">
        <li>
          <Link legacyBehavior href="/car-listing-left-sidebar?condition=used">
            <a>
            <svg width={30} height={30} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_611_1863)">
                <path d="M5.55943 7.37519C5.80237 7.37519 5.99923 7.17833 5.99923 6.93539V3.73629C5.99923 2.16111 7.28074 0.879597 8.85592 0.879597H21.1443C22.7195 0.879597 24.001 2.16111 24.001 3.73629V6.93545C24.001 7.17839 24.1979 7.37524 24.4408 7.37524C24.6837 7.37524 24.8806 7.17839 24.8806 6.93545V3.73629C24.8805 1.6761 23.2044 0 21.1442 0H8.85592C6.79573 0 5.11963 1.6761 5.11963 3.73629V6.93545C5.11963 6.9932 5.13101 7.05038 5.15311 7.10374C5.17521 7.1571 5.20761 7.20557 5.24845 7.24641C5.28929 7.28724 5.33777 7.31963 5.39113 7.34173C5.44449 7.36382 5.50168 7.37519 5.55943 7.37519ZM24.4407 15.8811C24.383 15.8811 24.3258 15.8924 24.2724 15.9145C24.2191 15.9366 24.1706 15.969 24.1297 16.0099C24.0889 16.0507 24.0565 16.0992 24.0344 16.1525C24.0123 16.2059 24.0009 16.2631 24.0009 16.3209V26.2637C24.0009 27.8389 22.7194 29.1204 21.1442 29.1204H8.85592C7.28074 29.1204 5.99923 27.8389 5.99923 26.2637V16.3209C5.99923 16.0779 5.80237 15.8811 5.55943 15.8811C5.31648 15.8811 5.11963 16.0779 5.11963 16.3209V26.2637C5.11963 28.3239 6.79573 30 8.85592 30H21.1443C23.2045 30 24.8806 28.3239 24.8806 26.2637V16.3209C24.8806 16.2042 24.8342 16.0924 24.7517 16.0099C24.6693 15.9274 24.5574 15.8811 24.4407 15.8811Z" />
                <path d="M22.6813 7.37521C22.9243 7.37521 23.1211 7.17835 23.1211 6.93541V3.73632C23.1211 2.64614 22.2342 1.75922 21.144 1.75922H19.3144C19.2429 1.75922 19.1725 1.77665 19.1092 1.81C19.046 1.84335 18.9919 1.89162 18.9515 1.95062L18.4435 2.69276C18.4336 2.70737 18.4245 2.72254 18.4163 2.73821C18.3392 2.88645 18.1985 2.97857 18.0492 2.97857H17.1226C16.8797 2.97857 16.6828 3.17543 16.6828 3.41837C16.6828 3.66132 16.8797 3.85817 17.1226 3.85817H18.0492C18.5185 3.85817 18.9504 3.59517 19.183 3.16974L19.5463 2.63881H21.144C21.7492 2.63881 22.2415 3.13115 22.2415 3.73632V6.93547C22.2415 6.99322 22.2529 7.05041 22.275 7.10376C22.2971 7.15712 22.3295 7.2056 22.3703 7.24643C22.4112 7.28727 22.4597 7.31966 22.513 7.34175C22.5664 7.36385 22.6236 7.37522 22.6813 7.37521ZM10.8167 3.16974C11.0494 3.59517 11.4812 3.85817 11.9505 3.85817H15.2484C15.4913 3.85817 15.6882 3.66132 15.6882 3.41837C15.6882 3.17543 15.4913 2.97857 15.2484 2.97857H11.9505C11.8012 2.97857 11.6606 2.88651 11.5834 2.73821C11.5753 2.72254 11.5661 2.70736 11.5562 2.69276L11.0482 1.95062C11.0078 1.89162 10.9537 1.84336 10.8905 1.81001C10.8272 1.77666 10.7568 1.75923 10.6853 1.75922H8.85569C7.76552 1.75922 6.8786 2.64614 6.8786 3.73632V6.93547C6.8786 7.17841 7.07545 7.37527 7.31839 7.37527C7.56134 7.37527 7.75819 7.17841 7.75819 6.93547V3.73632C7.75819 3.13115 8.25053 2.63881 8.85569 2.63881H10.4534L10.8167 3.16974ZM7.31839 15.8811C7.26064 15.8811 7.20344 15.8924 7.15008 15.9145C7.09672 15.9366 7.04823 15.969 7.00739 16.0099C6.96655 16.0507 6.93416 16.0992 6.91206 16.1526C6.88996 16.2059 6.87859 16.2631 6.8786 16.3209V26.2637C6.8786 27.3539 7.76552 28.2408 8.85569 28.2408H21.1441C22.2342 28.2408 23.1212 27.3539 23.1212 26.2637V20.1555C23.1212 19.9126 22.9243 19.7157 22.6814 19.7157C22.4384 19.7157 22.2416 19.9126 22.2416 20.1555V26.2637C22.2416 26.8689 21.7492 27.3612 21.1441 27.3612H8.85569C8.25053 27.3612 7.75819 26.8689 7.75819 26.2637V16.3209C7.75819 16.2042 7.71186 16.0924 7.62938 16.0099C7.5469 15.9274 7.43504 15.8811 7.31839 15.8811ZM22.6813 18.7211C22.9243 18.7211 23.1211 18.5242 23.1211 18.2813V16.3209C23.1211 16.0779 22.9243 15.8811 22.6813 15.8811C22.4384 15.8811 22.2415 16.0779 22.2415 16.3209V18.2813C22.2415 18.3979 22.2879 18.5098 22.3703 18.5923C22.4528 18.6747 22.5647 18.7211 22.6813 18.7211ZM27.6888 8.2548H10.5049C10.2619 8.2548 10.0651 8.45166 10.0651 8.6946C10.0651 8.93755 10.2619 9.1344 10.5049 9.1344H27.6888C28.4726 9.1344 29.1103 9.77211 29.1103 10.5559V12.7003C29.1103 13.4841 28.4726 14.1218 27.6888 14.1218H16.799C16.6835 14.1218 16.5727 14.1672 16.4904 14.2482L15.0384 15.6778C15.0281 15.6879 15.0143 15.6936 14.9998 15.6936C14.9854 15.6936 14.9715 15.688 14.9612 15.6779L13.5092 14.2482C13.4269 14.1672 13.3161 14.1218 13.2006 14.1218H2.31091C1.52707 14.1218 0.889363 13.4841 0.889363 12.7003V10.556C0.889363 9.77211 1.52707 9.1344 2.31091 9.1344H8.63058C8.87352 9.1344 9.07038 8.93755 9.07038 8.6946C9.07038 8.45166 8.87352 8.2548 8.63058 8.2548H2.31091C1.042 8.2548 0.00976562 9.2871 0.00976562 10.556V12.7003C0.00976562 13.9692 1.04206 15.0014 2.31091 15.0014H13.0205L14.3441 16.3047C14.5249 16.4827 14.7624 16.5717 14.9999 16.5717C15.2373 16.5717 15.4748 16.4827 15.6556 16.3047L16.9792 15.0014H27.6888C28.9577 15.0014 29.9899 13.9691 29.9899 12.7003V10.5559C29.9899 9.2871 28.9577 8.2548 27.6888 8.2548Z" />
                <path d="M17.0083 20.0958C16.5506 19.5671 15.9145 19.2484 15.2171 19.1981C14.5205 19.148 13.8445 19.3723 13.3158 19.8299C12.7871 20.2876 12.4683 20.9236 12.4181 21.6211C12.3678 22.3186 12.5923 22.9937 13.0498 23.5224C13.5075 24.0511 14.1437 24.3699 14.8411 24.4202C14.905 24.4248 14.969 24.4271 15.033 24.4271C15.5102 24.4276 15.9782 24.2965 16.3856 24.0482L17.6748 25.5374C17.716 25.5852 17.7671 25.6235 17.8245 25.6497C17.882 25.6759 17.9444 25.6895 18.0075 25.6894C18.0918 25.6893 18.1742 25.665 18.2451 25.6194C18.316 25.5738 18.3722 25.5089 18.4072 25.4322C18.4423 25.3556 18.4545 25.2705 18.4426 25.1871C18.4306 25.1037 18.395 25.0254 18.3399 24.9617L17.0505 23.4723C17.3941 23.0565 17.6006 22.546 17.6401 21.9972C17.6904 21.2997 17.4659 20.6245 17.0083 20.0958ZM14.9043 23.5428C14.4412 23.5095 14.0188 23.2978 13.7149 22.9467C13.4111 22.5958 13.2621 22.1473 13.2954 21.6843C13.3287 21.2212 13.5405 20.7989 13.8915 20.495C14.2102 20.2191 14.6091 20.0709 15.0265 20.0709C15.0688 20.0709 15.1113 20.0724 15.1539 20.0755C15.617 20.1088 16.0394 20.3205 16.3433 20.6716C16.6472 21.0225 16.7962 21.4709 16.7628 21.9339C16.7295 22.3969 16.5179 22.8191 16.1672 23.1229L16.1667 23.1233L16.1663 23.1237C15.8154 23.4274 15.3668 23.5759 14.9043 23.5428Z" />
                <path d="M4.09421 12.2949C4.41807 12.2949 4.68061 12.0324 4.68061 11.7085C4.68061 11.3847 4.41807 11.1221 4.09421 11.1221C3.77035 11.1221 3.50781 11.3847 3.50781 11.7085C3.50781 12.0324 3.77035 12.2949 4.09421 12.2949Z" />
                <path d="M7.31833 12.2949C7.64219 12.2949 7.90473 12.0324 7.90473 11.7085C7.90473 11.3847 7.64219 11.1221 7.31833 11.1221C6.99447 11.1221 6.73193 11.3847 6.73193 11.7085C6.73193 12.0324 6.99447 12.2949 7.31833 12.2949Z" />
                <path d="M11.0892 11.9356C11.2132 11.6365 11.0713 11.2934 10.7721 11.1694C10.473 11.0453 10.1299 11.1873 10.0058 11.4865C9.8818 11.7856 10.0238 12.1287 10.3229 12.2527C10.6221 12.3768 10.9652 12.2348 11.0892 11.9356Z" />
                <path d="M14.353 11.7085C14.353 11.3847 14.0904 11.1221 13.7666 11.1221C13.4427 11.1221 13.1802 11.3847 13.1802 11.7085C13.1802 12.0324 13.4427 12.2949 13.7666 12.2949C14.0904 12.2949 14.353 12.0324 14.353 11.7085Z" />
                <path d="M16.9907 12.2949C17.3146 12.2949 17.5771 12.0324 17.5771 11.7085C17.5771 11.3847 17.3146 11.1221 16.9907 11.1221C16.6668 11.1221 16.4043 11.3847 16.4043 11.7085C16.4043 12.0324 16.6668 12.2949 16.9907 12.2949Z" />
                <path d="M20.2148 12.2949C20.5387 12.2949 20.8012 12.0324 20.8012 11.7085C20.8012 11.3847 20.5387 11.1221 20.2148 11.1221C19.891 11.1221 19.6284 11.3847 19.6284 11.7085C19.6284 12.0324 19.891 12.2949 20.2148 12.2949Z" />
              </g>
            </svg>
            Voitures d'occasion
            </a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/car-listing-left-sidebar?condition=new">
            <a>
            <svg width={30} height={30} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_611_1886)">
                <path d="M26.5362 16.7025C26.5362 15.7152 25.7329 14.9119 24.7456 14.9119H23.3891L23.0346 12.9624C22.8442 11.9149 21.9332 11.1546 20.8686 11.1546H13.1488V12.0352H20.8686C21.4569 12.0352 21.966 12.4225 22.1323 12.9746H20.3424V13.8552H22.3019L22.462 14.7358H21.1643V15.6164H22.6221L22.9851 17.6125H19.6424V18.4932H23.4529C24.106 18.4932 24.6682 18.9807 24.7605 19.6273L25.4315 24.324C25.4405 24.387 25.445 24.4505 25.4451 24.5142C25.4451 25.2406 24.8523 25.8316 24.1238 25.8316H12.4424V26.7123H19.5499V28.3855C19.5499 29.2757 20.2741 29.9999 21.1643 29.9999H22.9256C23.8158 29.9999 24.5401 29.2757 24.5401 28.3855V26.6724C25.5558 26.4775 26.3257 25.5841 26.3257 24.5142C26.3257 24.4096 26.3181 24.3036 26.3033 24.1994L25.6323 19.5028C25.5753 19.1034 25.4105 18.7405 25.1704 18.4418C25.9533 18.2505 26.5362 17.5435 26.5362 16.7025ZM23.6594 28.3855C23.6594 28.7902 23.3303 29.1194 22.9256 29.1194H21.1643C20.7597 29.1194 20.4305 28.7902 20.4305 28.3855V26.7123H23.6594V28.3855ZM24.7456 17.6125H23.8801L23.5493 15.7926H24.7456C25.2473 15.7926 25.6555 16.2008 25.6555 16.7025C25.6555 17.2043 25.2473 17.6125 24.7456 17.6125Z" />
                <path d="M4.55496 24.5142C4.55496 24.4512 4.55954 24.3872 4.56858 24.324L5.2395 19.6273C5.33185 18.9807 5.89404 18.4932 6.54717 18.4932H18.7619V17.6125H7.01496L7.16438 16.7906H9.77502V15.91H7.32447L7.83177 13.1199C7.88699 12.8155 8.04737 12.5401 8.28491 12.3419C8.52245 12.1436 8.82206 12.0351 9.13146 12.0352H12.2683V11.1546H9.13146C8.06678 11.1546 7.15586 11.9149 6.96541 12.9624L6.61093 14.9119H5.25447C4.26712 14.9119 3.46387 15.7152 3.46387 16.7025C3.46387 17.5435 4.04672 18.2505 4.8296 18.4418C4.58954 18.7405 4.42475 19.1034 4.36768 19.5028L3.69676 24.1994C3.68185 24.3036 3.67434 24.4088 3.67428 24.5141C3.67434 25.5841 4.44424 26.4775 5.45995 26.6724V28.3855C5.45995 29.2757 6.18418 30 7.07443 30H8.83569C9.72594 30 10.4502 29.2757 10.4502 28.3855V26.7123H11.5619V25.8317H5.8762C5.14768 25.8317 4.55496 25.2407 4.55496 24.5142ZM4.34449 16.7025C4.34449 16.2008 4.75269 15.7926 5.25447 15.7926H6.45077L6.11989 17.6125H5.25447C4.75269 17.6125 4.34449 17.2043 4.34449 16.7025ZM6.34058 26.7123H9.56954V28.3855C9.56954 28.7902 9.24036 29.1194 8.83569 29.1194H7.07443C6.66976 29.1194 6.34058 28.7902 6.34058 28.3855V26.7123Z" />
                <path d="M10.6555 15.91H11.5361V16.7906H10.6555V15.91ZM12.0645 19.9609H12.9451V20.8415H12.0645V19.9609ZM17.0547 19.9609H17.9354V20.8415H17.0547V19.9609ZM7.27979 22.1624C7.27979 23.2145 8.13575 24.0705 9.18781 24.0705C10.2399 24.0705 11.0958 23.2145 11.0958 22.1624C11.0958 21.1103 10.2399 20.2544 9.18781 20.2544C8.13575 20.2544 7.27979 21.1103 7.27979 22.1624ZM10.2152 22.1624C10.2152 22.7289 9.75429 23.1898 9.18781 23.1898C8.62133 23.1898 8.16041 22.7289 8.16041 22.1624C8.16041 21.596 8.62133 21.135 9.18781 21.135C9.75429 21.135 10.2152 21.596 10.2152 22.1624ZM20.8121 24.0705C21.8641 24.0705 22.7201 23.2145 22.7201 22.1624C22.7201 21.1103 21.8641 20.2544 20.8121 20.2544C19.76 20.2544 18.9041 21.1103 18.9041 22.1624C18.9041 23.2145 19.76 24.0705 20.8121 24.0705ZM20.8121 21.135C21.3786 21.135 21.8395 21.596 21.8395 22.1624C21.8395 22.7289 21.3786 23.1898 20.8121 23.1898C20.2456 23.1898 19.7847 22.7289 19.7847 22.1624C19.7847 21.596 20.2456 21.135 20.8121 21.135ZM16.9559 3.80337L14.6727 1.52014L11.5592 4.63363L13.8424 6.91685L15.0878 5.67147L17.2673 7.85096L17.8899 7.22824L15.7105 5.04881L16.9559 3.80337ZM13.8424 5.67147L12.8046 4.63363L14.6727 2.76552L15.7105 3.80337L13.8424 5.67147Z" />
                <path d="M30 9.59883V2.1135H27.3581V3.22896H19.7694C19.0103 1.33843 17.1586 0 15 0C12.8414 0 10.9897 1.33843 10.2306 3.22896H2.64188V2.1135H0V21.6341H0.880626V2.99413H1.76125V29.1194H0.880626V22.5147H0V30H2.64188V7.04501H10.2306C10.9897 8.93554 12.8414 10.274 15 10.274C17.1586 10.274 19.0103 8.93554 19.7694 7.04501H27.3581V30H30V10.4795H29.1194V29.1194H28.2387V2.99413H29.1194V9.59883H30ZM9.96628 6.16438H2.64188V4.10959H9.96628C9.89865 4.44164 9.86301 4.78521 9.86301 5.13699C9.86301 5.48877 9.89865 5.83233 9.96628 6.16438ZM15 9.39335C12.653 9.39335 10.7436 7.48397 10.7436 5.13699C10.7436 2.79 12.653 0.880626 15 0.880626C17.347 0.880626 19.2564 2.79 19.2564 5.13699C19.2564 7.48397 17.347 9.39335 15 9.39335ZM27.3581 6.16438H20.0337C20.1014 5.83233 20.137 5.48877 20.137 5.13699C20.137 4.78521 20.1014 4.44164 20.0337 4.10959H27.3581V6.16438Z" />
                <path d="M12.4167 15.91H13.2974V16.7906H12.4167V15.91ZM18.5811 12.9745H19.4618V13.8552H18.5811V12.9745Z" />
              </g>
            </svg>
            Voitures neuves
            </a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/contact">
            <a>
            <svg width={30} height={30} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_611_1876)">
                <path d="M29.9715 29.4045L25.5769 17.8282C25.5404 17.732 25.4714 17.6518 25.3818 17.6013L20.701 14.9642L22.0676 12.7974C22.9063 11.4665 23.3497 9.92852 23.3497 8.34965C23.3497 3.74566 19.6041 6.10352e-05 15.0001 6.10352e-05C10.3961 6.10352e-05 6.65049 3.74566 6.65049 8.34965C6.65049 9.92893 7.09405 11.467 7.93322 12.7976L9.29945 14.9643L4.61847 17.6013C4.52886 17.6517 4.45979 17.732 4.42329 17.8282L0.0287672 29.4045C-0.00322401 29.4889 -0.00844482 29.5812 0.0138143 29.6687C0.0360734 29.7561 0.0847328 29.8347 0.153179 29.8935C0.221625 29.9524 0.306538 29.9888 0.396376 29.9977C0.486215 30.0066 0.576622 29.9877 0.655309 29.9434L7.71983 25.9634L14.7843 29.9434C14.8502 29.9805 14.9245 30 15.0001 30C15.0756 30 15.1499 29.9805 15.2158 29.9434L22.2803 25.9634L29.3448 29.9434C29.4235 29.9878 29.5139 30.0068 29.6038 29.9979C29.6937 29.9891 29.7787 29.9527 29.8471 29.8938C29.9156 29.8349 29.9643 29.7563 29.9865 29.6688C30.0088 29.5812 30.0035 29.489 29.9715 29.4045ZM15.4396 22.7761C15.7191 22.6773 15.957 22.487 16.1147 22.236C16.137 22.2008 19.8781 16.2692 19.8781 16.2692L21.7835 25.2345L15.4396 28.8084V22.7761ZM8.67666 12.3286C7.92613 11.1386 7.52946 9.7627 7.52946 8.34959C7.52946 4.23023 10.8808 0.878907 15.0001 0.878907C19.1195 0.878907 22.4708 4.23023 22.4708 8.34959C22.4708 9.7624 22.0743 11.1384 21.3242 12.3286C21.2656 12.4216 15.4752 21.6039 15.3742 21.7626C15.3733 21.7639 15.3724 21.7653 15.3716 21.7667C15.2901 21.8956 15.1513 21.9726 15.0001 21.9726C14.8489 21.9726 14.7095 21.8952 14.6278 21.7669C14.5691 21.6738 8.76725 12.4733 8.67865 12.3319L8.67666 12.3286ZM5.18846 18.2889L9.2851 15.9811L8.57143 19.3387C8.55778 19.4028 8.55864 19.4691 8.57393 19.5328C8.58922 19.5965 8.61856 19.656 8.65981 19.7069C8.70106 19.7578 8.75316 19.7988 8.81231 19.827C8.87146 19.8552 8.93616 19.8698 9.00168 19.8697C9.10228 19.8695 9.19979 19.8349 9.27793 19.7715C9.35608 19.7082 9.41012 19.6199 9.43105 19.5215L10.1223 16.2695L13.8852 22.2372C14.0435 22.4874 14.2814 22.6772 14.5606 22.776V28.8086L8.21682 25.2345L9.06566 21.2408C9.07767 21.1844 9.07843 21.1261 9.06792 21.0694C9.05741 21.0126 9.03583 20.9585 9.0044 20.9101C8.97297 20.8617 8.93232 20.82 8.88476 20.7873C8.8372 20.7546 8.78367 20.7316 8.72723 20.7196C8.67078 20.7075 8.6125 20.7067 8.55575 20.7172C8.49899 20.7277 8.44485 20.7493 8.39644 20.7808C8.34803 20.8122 8.30629 20.8528 8.27361 20.9004C8.24093 20.948 8.21795 21.0016 8.20598 21.058L7.33123 25.1734L1.28109 28.582L5.18846 18.2889ZM22.669 25.1735L20.7153 15.981L24.8118 18.2889L28.7192 28.582L22.669 25.1735Z" />
                <path d="M19.8342 8.34961C19.8342 5.68418 17.6657 3.51562 15.0002 3.51562C12.3348 3.51562 10.1663 5.68418 10.1663 8.34961C10.1663 11.015 12.3348 13.1836 15.0002 13.1836C17.6657 13.1836 19.8342 11.015 19.8342 8.34961ZM11.0452 8.34961C11.0452 6.16875 12.8194 4.39453 15.0002 4.39453C17.1811 4.39453 18.9553 6.16875 18.9553 8.34961C18.9553 10.5305 17.1811 12.3047 15.0002 12.3047C12.8194 12.3047 11.0452 10.5305 11.0452 8.34961Z" />
                <path d="M18.0764 8.34961C18.0764 6.65344 16.6964 5.27344 15.0002 5.27344C13.3041 5.27344 11.9241 6.65344 11.9241 8.34961C11.9241 10.0458 13.3041 11.4258 15.0002 11.4258C16.6964 11.4258 18.0764 10.0458 18.0764 8.34961ZM12.803 8.34961C12.803 7.13801 13.7886 6.15234 15.0002 6.15234C16.2118 6.15234 17.1975 7.13801 17.1975 8.34961C17.1975 9.56121 16.2118 10.5469 15.0002 10.5469C13.7886 10.5469 12.803 9.56121 12.803 8.34961Z" />
              </g>
            </svg>
            Contactez-nous
            </a>
          </Link>
        </li>
      </ul>
    </div>

  )
}

export default index