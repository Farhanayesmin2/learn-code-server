import { Badge, Button, Sidebar, Toast } from 'flowbite-react';
import React from 'react';
import {FcAbout } from "react-icons/fc";
import {RiMoonFill } from "react-icons/ri";
import { MdLoop, MdClose } from "react-icons/md";
const LeftsideNav = () => {
    return (
        <div>
          <div className="w-fit">
  <Sidebar aria-label="Sidebar with call to action button example">
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item
          href="#"
          icon={RiMoonFill} 
        >
          Dashboard
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
          icon={FcAbout}
        >
          Kanban
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
          icon={FcAbout}
        >
          Inbox
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
          icon={FcAbout}
        >
          Users
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
          icon={FcAbout}
        >
          Products
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
          icon={FcAbout}
        >
          Sign In
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
          icon={FcAbout}
        >
          Sign Up
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
    <Sidebar.CTA>
      <div className="mb-3 flex items-center">
        <Badge color="warning">
          Beta Version
        </Badge>
       
      </div>
              <div>
              <Toast>
  <div className="flex !items-start">
    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-500 dark:bg-blue-900 dark:text-blue-300">
      <MdLoop className="h-5 w-5" />
    </div>
    <div className="ml-3 text-sm font-normal">
      <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
        Update available
      </span>
      <div className="mb-2 text-sm font-normal">
        A new software version is available for download.
      </div>
      <div className="flex gap-2">
        <div className="w-full">
          <Button size="xs">
            Update
          </Button>
        </div>
        <div className="w-full">
          <Button
            color="light"
            size="xs"
          >
           <MdClose></MdClose>
          </Button>
        </div>
      </div>
    </div>
    <Toast.Toggle />
  </div>
</Toast>
     </div>
    </Sidebar.CTA>
  </Sidebar>
</div>

        </div>
    );
};

export default LeftsideNav;