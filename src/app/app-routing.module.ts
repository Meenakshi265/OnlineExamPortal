import { Component, NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { UserloginComponent } from './pages/userlogin/userlogin.component';
import { UserdashboradComponent } from './pages/user/userdashborad/userdashborad.component';
import { AdmindashbordComponent } from './pages/admin/admindashbord/admindashbord.component';
import { adminGuard } from './service/gurds/adminGuard';
import { userGuard } from './service/gurds/user.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoryComponent } from './pages/admin/view-category/view-category.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizComponent } from './pages/admin/view-quiz/view-quiz.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuestionComponent } from './pages/admin/view-question/view-question.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';


const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
  
  
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'loginuser',
    component: UserloginComponent,
    pathMatch: 'full'
  },
  {
    path: 'user',
    component: UserdashboradComponent,
    pathMatch: 'full',
    canActivate:[userGuard]

  },
  {
    path: 'admin',
    component: AdmindashbordComponent,
    canActivate:[adminGuard],
    children:[{
      path: 'profile',
      component: ProfileComponent,
    },
    {
      path: '',
      component: WelcomeComponent,
    },
    {
      path: 'categories',
      component: ViewCategoryComponent,
    },
    {
      path: 'add-category',
      component: AddCategoryComponent,
    },
    {
      path: 'quizzes',
      component: ViewQuizComponent,
    },
    {
      path: 'add-quiz',
      component: AddQuizComponent,
    }
    ,
    {
      path: 'update/:qid',
      component: UpdateQuizComponent,
    },
    {
      path: 'quetion/:qid',
      component: ViewQuestionComponent,
    },
    {
      path: 'add-question/:qid/:title',
      component: AddQuestionComponent,
    },
    {
      path: 'update-question/:quesId',
      component: UpdateQuestionComponent,
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
