import RouletteGame from "../components/RouletteWheel";

export default async function RestoPage({
    params,
}: {
    params: Promise<{ resto: string }>;
}) {
    const { resto } = await params;

    return (
        <main>
            <RouletteGame restoName={resto.replace(/-/g, " ")} />
        </main>
    );
}
