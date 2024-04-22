import { FC, createContext, useContext, useState } from 'react';

interface MenuContextProps {
    menuOpen: boolean;
    toggleMenu: () => void;
   
}
const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('useMenu must be used within a MenuProvider');
    }
    return context;
};

interface MenuProviderProps {
    children: React.ReactNode;
}


export const MenuProvider: FC <MenuProviderProps> = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen)
    };

    return (
        <MenuContext.Provider value={{ menuOpen, toggleMenu}}>
            {children}
        </MenuContext.Provider>
    );
};

export default MenuContext;
