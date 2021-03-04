import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//import { AuthGuard } from "./services/auth-guard.service";

import { HomepageComponent } from "./components/homepage/homepage.component";
import { PostsComponent } from "./components/posts/posts.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";

const routes: Routes = [
  { path: "", component: HomepageComponent },
  //{ path: "posts", component: PostsComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
