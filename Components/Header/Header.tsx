import { 
        Box, 
        Text,
        FormControl,
        FormLabel,
        FormErrorMessage,
        FormHelperText,
        Input,
        Button,
        Menu,
        MenuButton,
        MenuList,
        MenuItem,
        MenuItemOption,
        MenuGroup,
        MenuOptionGroup,
        MenuDivider,
    } from "@chakra-ui/react";
import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Header() {

    const   NAV_LINKS = [
        {
            label:"Home",
            href: "/"
        },
        {
            label:"About",
            href: "/"
        },
        {
            label:"Store",
            href: "/"
        },
    ]


    return (
        <Box
            width="100%"
            height="50px"
            bg="#E2E8F0"
            boxShadow="xl"
        >
        <MaxWidthWrapper>
            <Box
                p="10px"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >

                {/* navLinks */}
                <Box
                    display="flex"
                    alignItems="center"
                    gap="20px"
                    
                >
                    {
                        NAV_LINKS.map((item) => (
                            <Text
                                key={item.label}
                                fontWeight="bold"
                                fontSize="20px"
                            >
                                {item.label}
                            </Text>
                        ))
                    }
                </Box>
                {/* searchBar */}
                <Box
                    display="flex"
                    alignItems="center"
                >
                    <Input 
                        type='email'  
                        width="300px"
                        p="5px"
                        border="none"
                        rounded="10px" 
                    />
                    <Button
                        border="none"
                        width="50px"
                        p="3px"
                        rounded="10px"
                    >
                        <SearchIcon/>
                    </Button>

                </Box>
                {/* Account&cart */}
                <Box
                    display="flex"
                    alignItems="center"
                    gap="10px"
                >
                    <Box >
                        <Menu>
                        <MenuButton 
                            as={Button}  
                            p="5px"
                            border="none"
                            rightIcon={<PersonIcon/>}
                            rounded="20px"
                            cursor="pointer"
                        >
                            Account
                        </MenuButton>
                        <MenuList
                            width="120px"
                            height="100px"
                            bg="#E2E8F0"
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            gap="15px"
                            rounded="5px"
                        >
                            <MenuList>
                                <Button
                                    width="70px"
                                    bg="#000"
                                    color="#fff"
                                    p="5px"
                                    border="none"
                                    rounded="50px"
                                >Sign In</Button>
                            </MenuList>
                            <MenuList>
                                <Button
                                    width="70px"
                                    bg="#000"
                                    color="#fff"
                                    p="5px"
                                    border="none"
                                    rounded="50px"
                                >Sign Up</Button>
                            </MenuList>

                        </MenuList>

                        </Menu>
                    </Box>


                    <Box >
                        <Menu>
                        <MenuButton 
                            as={Button}  
                            p="5px"
                            border="none"
                            rightIcon={<ShoppingCartIcon/>}
                            rounded="20px"
                            cursor="pointer"
                        >
                            Cart
                        </MenuButton>
                        </Menu>
                    </Box>


                </Box>

            </Box>
        </MaxWidthWrapper>
        </Box>
    )
}
export default Header;