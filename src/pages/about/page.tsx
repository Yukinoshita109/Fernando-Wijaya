import React from 'react';
import Link from 'next/link';

export default function About() {
    return (
        <div className="relative h-screen w-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/bg.svg')" }}>
            {/* Header Section */}
            <div className='absolute inset-x-0 flex justify-center items-start p-4' style={{ top: '5%', paddingBottom: '24px', position: 'relative' }}>
                <div className='relative bg-[#323231] rounded-[27px] w-[428px] h-[68px] flex items-center justify-start p-2 gap-x-[35px]'>
                    <Link href='/' className='cursor-pointer'>
                        <img src='/Frame 136.svg' alt='logo-ecs' className='absolute w-[48px] h-[43.12px]' style={{ top: '12px', left: '35px', zIndex: '10' }} />
                    </Link>
                    <Link href='' className='cursor-default'>
                        <img src='/Frame 139.svg' alt='logo-user' className='absolute w-[75px] h-[24px]' style={{ top: '22px', left: '118px', zIndex: '10' }} />
                    </Link>
                    <Link href='' className='cursor-default'>
                        <img src='/artboard.svg' alt='logo-art' className='absolute w-[24px] h-[24px]' style={{ top: '23px', left: '224px', zIndex: '10' }} />
                    </Link>
                    <Link href='' className='cursor-default'>
                        <img src='/Ellipse 2.svg' alt='reach' className='absolute w-[105px] h-[60px]' style={{ top: '5px', left: '291px' }} />
                    </Link>
                    <div className='bg-[#FFFFFF] rounded-[20px] absolute flex items-center justify-center' style={{ width: '106px', height: '42px', top: '14px', left: '287px' }}>
                        <h1 style={{ fontFamily: 'Inter', fontSize: '16px', textAlign: 'center', color: '#1E1E1E', fontWeight: '400', lineHeight: '24px' }}>Reach Us</h1>
                    </div>
                </div>
            </div>
            {/* Image Section */}
            <div className='flex justify-center items-center' style={{ marginTop: '80px' }}>
                <img src='/Frame 165.svg' alt='content' className='w-[824px] h-[400px]' />
            </div>
        </div>
    );
}