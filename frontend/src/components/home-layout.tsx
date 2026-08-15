interface Props {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: Props) => {
  return (
    <div className="h-screen overflow-hidden">
      {children}
    </div>
  );
};

export default HomeLayout;
