import ProfileEdit from '@/components/mypage/ProfileEdit';

export default function ProfileEditPage({ params }: { params: { userName: string } }) {
  const { userName } = params;
  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-4 md:px-8 mt-24">
      <section className="w-full max-w-screen-lg">
        <ProfileEdit userName={userName} />
      </section>
    </main>
  );
}
