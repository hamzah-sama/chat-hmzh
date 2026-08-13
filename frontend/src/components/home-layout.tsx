interface Props {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: Props) => {
  return (
    <div className="h-screen bg-[#0d0f14] text-white overflow-hidden">
      {children}
    </div>
  );
};

export default HomeLayout;
