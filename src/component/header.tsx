import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem,
Input
} from '@nextui-org/react';
import HeaderAuth from './header-auth';


export default function Header() {
  

  

  return (
    <Navbar className='shadow mb-5'>
      <NavbarBrand>
        <Link href='/' className='font-bold'>Discuss</Link>
      </NavbarBrand>
      <NavbarContent justify='center'>
        <Input/>
      </NavbarContent>
      <NavbarContent justify='end'>
        
          <HeaderAuth/>
        
      </NavbarContent>
    </Navbar>
  )
}