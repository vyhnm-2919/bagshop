<template>
  <div class="col-lg-4 col-md-6 col-12 d-lg-block d-none">
    <div class="sidebar sticky-bar p-4 rounded shadow">
      <div class="widget">
        <h5 class="widget-title">Followers :</h5>
        <div class="row mt-4">
          <div class="col-6 text-center">
            <i
              data-feather="user-plus"
              class="fea icon-ex-md text-primary mb-1"
            ></i>
            <h5 class="mb-0">2588</h5>
            <p class="text-muted mb-0">Followers</p>
          </div>
          <!--end col-->

          <div class="col-6 text-center">
            <i
              data-feather="users"
              class="fea icon-ex-md text-primary mb-1"
            ></i>
            <h5 class="mb-0">454</h5>
            <p class="text-muted mb-0">Following</p>
          </div>
        </div>
      </div>

      <div class="widget">
        <ul
          class="nav nav-pills nav-justified flex-column bg-white rounded mt-4 shadow p-3 mb-0"
          id="pills-tab"
          role="tablist"
        >
          <!-- <div class="col-6 mt-4 pt-2">
                    <a
                      href="account-profile.html"
                      class="accounts active rounded d-block shadow text-center py-3"
                    >
                      <span class="pro-icons h3 text-muted"
                        ><i class="uil uil-dashboard"></i
                      ></span>
                      <h6 class="title text-dark h6 my-0">Profile</h6>
                    </a>
                  </div> -->

          <li class="nav-item mt-2">
            <a
              class="nav-link rounded"
              id="order-history"
              data-toggle="pill"
              href="#orders"
              role="tab"
              aria-controls="orders"
              aria-selected="false"
            >
              <div class="text-left py-1 px-3">
                <h6 class="mb-0">
                  <i class="uil uil-list-ul h5 align-middle mr-2 mb-0"></i>
                  Orders
                </h6>
              </div>
            </a>
          </li>
          <li class="nav-item mt-2">
            <a
              class="nav-link rounded active"
              id="order-history"
              data-toggle="pill"
              href="#products"
              role="tab"
              aria-controls="orders"
              aria-selected="false"
            >
              <div class="text-left py-1 px-3">
                <h6 class="mb-0">
                  <i class="uil uil-list-ul h5 align-middle mr-2 mb-0"></i>
                  Products
                </h6>
              </div>
            </a>
          </li>

          <li class="nav-item mt-2">
            <a
              class="nav-link rounded"
              id="account-details"
              data-toggle="pill"
              href="#account"
              role="tab"
              aria-controls="account"
              aria-selected="false"
            >
              <div class="text-left py-1 px-3">
                <h6 class="mb-0">
                  <i class="uil uil-user h5 align-middle mr-2 mb-0"></i>
                  Account Details
                </h6>
              </div>
            </a>
          </li>

          <li class="nav-item mt-2">
            <a
              class="nav-link rounded"
              href="auth-login.html"
              aria-selected="false"
            >
              <div class="text-left py-1 px-3">
                <h6 class="mb-0">
                  <i class="uil uil-sign-out-alt h5 align-middle mr-2 mb-0"></i>
                  Logout
                </h6>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div class="widget mt-4 pt-2">
        <h5 class="widget-title">Follow me :</h5>
        <ul class="list-unstyled social-icon mb-0 mt-4">
          <li class="list-inline-item">
            <a
              href="javascript:void(0)"
              class="rounded d-flex justify-content-center align-items-center"
              ><fa :icon="['fab', 'facebook-f']"
            /></a>
          </li>
          <li class="list-inline-item">
            <a
              href="javascript:void(0)"
              class="rounded d-flex justify-content-center align-items-center"
              ><fa :icon="['fas', 'hashtag']"
            /></a>
          </li>
          <li class="list-inline-item">
            <a
              href="javascript:void(0)"
              class="rounded d-flex justify-content-center align-items-center"
              ><fa :icon="['fab', 'youtube']"
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component
export default class ProfileSidebar extends Vue {}
</script>
