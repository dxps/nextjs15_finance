import { ClerkLoaded, ClerkLoading, SignIn } from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const SignInPage = () => {
	return (
		<div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
			<div className="h-full lg:flex flex-col items-center justify-center px-4">
				<div className="text-center space-y-4 pt-16">
					<h1 className="font-bold text-3xl text-[#2e2a47">
						Sign-In
					</h1>
					<p className="text-base text-[#7E8CA0">
						Log in or{' '}
						<Link className="text-blue-600" href="/sign-up">
							create an account
						</Link>{' '}
						to continue
					</p>
				</div>
				<div className="flex itemsc-center justify-center mt-8">
					<ClerkLoaded>
						<SignIn path="/sign-in" />
					</ClerkLoaded>
					<ClerkLoading>
						<Loader2 className="animate-spin text-muted-foreground" />
					</ClerkLoading>
				</div>
			</div>

			<div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
				<Image src="/logo.svg" alt="Login" width={200} height={200} />
			</div>
		</div>
	)
}

export default SignInPage
