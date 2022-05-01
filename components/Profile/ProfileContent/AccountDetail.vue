<template>
  <div

    class="tab-pane fade bg-white show active shadow rounded p-4"
    id="account"
    role="tabpanel"
    aria-labelledby="account-details"
  >
    <form>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>First Name</label>
            <div class="position-relative">
              <i data-feather="user" class="fea icon-sm icons"></i>
              <input
                name="name"
                id="first-name"
                type="text"
                class="form-control pl-5"
                value="Cally"
              />
            </div>
          </div>
        </div>
        <!--end col-->
        <div class="col-md-6">
          <div class="form-group">
            <label>Last Name</label>
            <div class="position-relative">
              <i data-feather="user-check" class="fea icon-sm icons"></i>
              <input
                name="name"
                id="last-name"
                type="text"
                class="form-control pl-5"
                value="Joseph"
              />
            </div>
          </div>
        </div>
        <!--end col-->
        <div class="col-md-6">
          <div class="form-group">
            <label>Your Email</label>
            <div class="position-relative">
              <i data-feather="mail" class="fea icon-sm icons"></i>
              <input
                name="email"
                id="email"
                type="email"
                class="form-control pl-5"
                value="callyjoseph@gmail.com"
              />
            </div>
          </div>
        </div>
        <!--end col-->
        <div class="col-md-6">
          <div class="form-group">
            <label>Display Name</label>
            <div class="position-relative">
              <i data-feather="user-check" class="fea icon-sm icons"></i>
              <input
                name="name"
                id="display-name"
                type="text"
                class="form-control pl-5"
                value="cally_joseph"
              />
            </div>
          </div>
        </div>
        <!--end col-->

        <div class="col-lg-12 mt-2 mb-0">
          <button class="btn btn-primary">Save Changes</button>
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </form>

    <h5 class="mt-4">Change password :</h5>
    <form>
      <div class="row mt-3">
        <div class="col-lg-12">
          <div class="form-group">
            <label>Old password :</label>
            <div class="position-relative">
              <i data-feather="key" class="fea icon-sm icons"></i>
              <input
                type="password"
                class="form-control pl-5"
                placeholder="Old password"
                required=""
              />
            </div>
          </div>
        </div>
        <!--end col-->

        <div class="col-lg-12">
          <div class="form-group">
            <label>New password :</label>
            <div class="position-relative">
              <i data-feather="key" class="fea icon-sm icons"></i>
              <input
                type="password"
                class="form-control pl-5"
                placeholder="New password"
                required=""
              />
            </div>
          </div>
        </div>
        <!--end col-->

        <div class="col-lg-12">
          <div class="form-group">
            <label>Re-type New password :</label>
            <div class="position-relative">
              <i data-feather="key" class="fea icon-sm icons"></i>
              <input
                type="password"
                class="form-control pl-5"
                placeholder="Re-type New password"
                required=""
              />
            </div>
          </div>
        </div>
        <!--end col-->

        <div class="col-lg-12 mt-2 mb-0">
          <button class="btn btn-primary">Save Password</button>
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class AccountDetail extends Vue {}
</script>
