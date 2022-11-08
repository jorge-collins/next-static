import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";

export const Navbar = () => {

    const { theme } = useTheme();

    return (
        <div style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            padding: "0px 20px",
            backgroundColor: theme.colors.gray100.value
        }}>
            <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/125px-Flag_of_Qatar.svg.png"
                alt="App icon"
                width={120}
                height={50}
            />
            <Spacer />
            <Text color="white" h2>Q</Text>
            <Text color="white" h3>uiniela mundialista 2022</Text>

            <Spacer css={{ flex: 1 }} />

            <Text color="white">Favoritos</Text>
        </div>
    );
};
