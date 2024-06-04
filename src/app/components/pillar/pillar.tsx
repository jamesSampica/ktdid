import styles from "./pillar.module.css";

type HexColorCode = `#${string}`;

interface PillarProps {
    children: React.ReactNode,
    color: HexColorCode
}

export default function Pillar({
    children,
    color
}: Readonly<PillarProps>) {
    return (
        <div className={styles.pillar} style={{ ["--pillar-color" as string]: color }}>
            {children}
        </div>
    );
}