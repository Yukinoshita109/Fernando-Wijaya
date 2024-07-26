import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative h-screen w-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/bg.svg')" }}>
      {/* Header Section */}
      <div className='absolute inset-x-0 top-[5%] flex justify-center items-start p-4'>
        <div className='relative bg-[#323231] rounded-[27px] w-[428px] h-[68px] flex items-center p-2 gap-x-[35px]'>
          <Link href='' className='cursor-default'>
            <img src='/Frame 136.svg' alt='logo-ecs' className='absolute w-[48px] h-[43.12px]' style={{ top: '12px', left: '35px', zIndex: 10 }} />
          </Link>
          <Link href='/about/page' className='cursor-pointer'>
            <img src='user.svg' alt='logo-user' className='absolute w-[24px] h-[24px]' style={{ top: '22px', left: '118px', zIndex: 10 }} />
          </Link>
          <Link href='' className='cursor-default'>
            <img src='artboard.svg' alt='logo-art' className='absolute w-[24px] h-[24px]' style={{ top: '22px', left: '175px', zIndex: 10 }} />
          </Link>
          <Link href='' className='cursor-default'>
            <img src='Ellipse 2.svg' alt='reach' className='absolute w-[105px] h-[60px]' style={{ top: '5px', left: '291px' }} />
          </Link>
          <div className='bg-[#FFFFFF] rounded-[20px] absolute flex items-center justify-center' style={{ width: '106px', height: '42px', top: '14px', left: '287px' }}>
            <h1 className='font-inter text-[16px] text-center text-[#1E1E1E] font-[400] leading-[24px]'>Reach Us</h1>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="relative h-screen w-screen">
        <img src='/ECS LABORATORY.svg' alt='iot' className='absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        <img src='/Property 1=IoT.svg' alt='iot' className='absolute' style={{ top: '65%', left: '50%', transform: 'translate(-50%, -65%)' }} />
      </div>
      
      {/* Footer Section */}
      <div className='absolute inset-x-0 bottom-[5%] flex justify-center items-end p-4 gap-x-5'>
        <Link href='https://www.linkedin.com/company/ecslaboratory/'>
          <img src="linkedlnicon.svg" alt="LinkedIn Logo" className="w-[24px] h-[24px]" />
        </Link>
        <Link href='https://www.instagram.com/ecs_epits?igsh=MWRvdm13YWNiNmg3bg=='>
          <img src="instagramicon.svg" alt="Instagram Logo" className="w-[24px] h-[24px]" />
        </Link>
        <Link href=''>
          <img src="googleicon.svg" alt="Google Logo" className="w-[24px] h-[24px]" />
        </Link>
        <Link href=''>
          <img src="reacticon.svg" alt="React Logo" className="w-[24px] h-[24px]" />
        </Link>
      </div>
    </div>
  );
}
