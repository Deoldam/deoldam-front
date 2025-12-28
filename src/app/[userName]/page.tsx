import MyPageNav from '../../components/MyPageNav';

export default async function UserPage({ params }: any) {
  const { userName } = await params;

  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-4 md:px-8 mt-24">
      <section className="w-full max-w-screen-lg">
        <h1 className="text-4xl font-bold text-gray-900">{userName}님의 마이페이지</h1>
        <p className="mt-2 text-lg text-gray-600">마이페이지에서 나의 활동을 관리하세요.</p>
        <div className="mt-8">
          <MyPageNav userName={userName} />
        </div>
      </section>
    </main>
  );
}
