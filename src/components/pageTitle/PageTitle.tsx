// src/components/PageTitle.tsx
import '../style/PageTitle.css';

type PageTitleProps = {
    children: string;
};

export default function PageTitle({ children }: PageTitleProps) {
    return <h1 className="page-title">{children}</h1>;
}
