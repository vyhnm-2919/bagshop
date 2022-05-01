<template>
  <div>
    <section class="bg-profile d-table w-100 bg-success">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div
              class="card public-profile border-0 rounded shadow"
              style="z-index: 1"
            >
              <div class="card-body">
                <div class="row align-items-center">
                  <div class="col-lg-2 col-md-3 text-md-left text-center">
                    <!-- image here -->
                  </div>

                  <div class="col-lg-10 col-md-9">
                    <div class="row align-items-end">
                      <div
                        class="col-md-7 text-md-left text-center mt-4 mt-sm-0"
                      >
                        <h3 class="title mb-0">Krista Joseph</h3>
                        <small class="text-muted h6 mr-2">Web Developer</small>
                        <ul class="list-inline mb-0 mt-3">
                          <li class="list-inline-item mr-2">
                            <fa :icon="['fab', 'google']" />
                          </li>
                          <li class="list-inline-item">
                            <a
                              href="javascript:void(0)"
                              class="text-muted"
                              title="Linkedin"
                              ><i
                                data-feather="linkedin"
                                class="fea icon-sm mr-2"
                              ></i
                              >Krista Joseph</a
                            >
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-5 text-md-right text-center">
                        <ul class="list-unstyled social-icon social mb-0 mt-4">
                          <li class="list-inline-item">
                            <a
                              href="javascript:void(0)"
                              class="rounded d-flex justify-content-center align-items-center"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Notifications"
                              ><fa :icon="['fas', 'user-plus']"
                            /></a>
                          </li>
                          <li class="list-inline-item">
                            <a
                              href="javascript:void(0)"
                              class="rounded d-flex justify-content-center align-items-center"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Notifications"
                              ><fa :icon="['fas', 'message']"
                            /></a>
                          </li>
                          <li class="list-inline-item">
                            <a
                              href="javascript:void(0)"
                              class="rounded d-flex justify-content-center align-items-center"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Notifications"
                              ><fa :icon="['fas', 'bell']"
                            /></a>
                          </li>
                          <li class="list-inline-item">
                            <a
                              href="account-setting.html"
                              class="rounded d-flex justify-content-center align-items-center"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Settings"
                              ><fa :icon="['fas', 'screwdriver-wrench']"
                            /></a>
                          </li>
                        </ul>
                        <!--end icon-->
                      </div>
                      <!--end col-->
                    </div>
                    <!--end row-->
                  </div>
                  <!--end col-->
                </div>
                <!--end row-->
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--ed container-->
    </section>
    <!--end section-->
    <!-- Hero End -->

    <!-- Profile Start -->
    <section class="section mt-60">
      <div class="container mt-lg-3">
        <div class="row">
          <ProfileSidebar />
          <ProfileContent />
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import ProfileContent from '~/components/Profile/ProfileContent.vue'
import ProfileSidebar from '~/components/Profile/ProfileSideBar.vue'

@Component({
  components: {
    ProfileSidebar,
    ProfileContent
  }
})
export default class Profile extends Vue {}
</script>
